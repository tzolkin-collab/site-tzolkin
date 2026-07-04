'use client';

import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, LineChart, Line, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from 'recharts';


import { useTheme } from 'next-themes';


interface ServiceChartProps {
  data: Record<string, string | number | boolean>[];
  config: {
    type: 'area' | 'bar' | 'line' | 'pie' | 'funnel';
    dataKey1: string;
    label1: string;
    dataKey2?: string;
    label2?: string;
    dataKey3?: string;
    label3?: string;
    color?: string;
    color2?: string;
    color3?: string;
    colorAxis?: string;
  };
}

const PIE_COLORS = ['#FFD100', '#333333', '#888888', '#BBBBBB'];

export function ServiceChart({ data, config }: ServiceChartProps) {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();
  const [colors, setColors] = React.useState({
    text: 'currentColor',
    brand: '#EAEAEA',
    brandAlt: '#555555'
  });

  React.useEffect(() => {
    setMounted(true);
    const rootStyles = getComputedStyle(document.body);
    const getColor = (vari: string) => {
      const val = rootStyles.getPropertyValue(vari).trim();
      if (!val) return 'currentColor';
      return val.startsWith('#') || val.startsWith('rgb') ? val : `hsl(${val})`;
    };

    setColors({
      text: getColor('--foreground'), // Atualizado conforme seu edit anterior
      brand: getColor('--brand'),
      brandAlt: getColor('--foreground')
    });
  }, [resolvedTheme]);

  if (!mounted) {
    return <div className="w-full h-full min-h-[300px]" />;
  }

  const axisColor = config.colorAxis || colors.text;
  const brandColor = config.color || colors.brand;
  const brandColorAlt = config.color2 || colors.brandAlt;
  const brandColor3 = config.color3 || colors.text;

  interface TooltipPayloadEntry {
    color?: string;
    payload?: {
      fill?: string;
      description?: string;
    };
    name?: string;
    value?: number | string;
  }

  interface CustomTooltipProps {
    active?: boolean;
    payload?: TooltipPayloadEntry[];
    label?: string;
  }

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border p-3 rounded-lg shadow-xl text-sm max-w-[280px]">
          {label && <p className="font-bold mb-2 text-foreground">{label}</p>}
          {payload.map((entry: TooltipPayloadEntry, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="flex items-center gap-2" style={{ color: entry.color || entry.payload?.fill }}>
                <span className="w-2 h-2 rounded-full min-w-[8px]" style={{ backgroundColor: entry.color || entry.payload?.fill }} />
                <span className="font-medium text-foreground">{entry.name}:</span> {entry.value}{config.type === 'pie' ? '%' : ''}
              </p>
              {entry.payload?.description && (
                <p className="text-xs text-foreground/70 leading-relaxed font-normal ml-4">
                  {entry.payload.description}
                </p>
              )}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (config.type) {
      case 'funnel': {
        const maxValue = Math.max(...data.map(d => Number(d[config.dataKey1])));
        const chartWidth = 500;
        const chartHeight = 350;
        const sliceHeight = chartHeight / data.length;
        const gap = 2;

        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-2">
            {/* Top Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 w-full">
              {data.map((item, i) => {
                const opacity = Math.max(0.3, 1 - ((data.length - 1 - i) * 0.18));
                return (
                  <div key={i} className="flex items-center gap-2 cursor-default group">
                    <div
                      className="w-4 h-4 rounded-sm transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: brandColor,
                        opacity: opacity,
                        boxShadow: `0 0 8px ${brandColor}40`
                      }}
                    />
                    <span className="text-sm font-bold tracking-wide text-foreground/90 group-hover:text-foreground transition-colors">{item.name}</span>
                  </div>
                );
              })}
            </div>

            {/* SVG Funnel Shape */}
            <div className="w-full max-w-[500px] flex-1 min-h-[250px] relative mb-15">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="xMidYMid meet" className="w-full h-full overflow-visible">
                <defs>
                  {/* Subtle neon glow for the outlines */}
                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {data.map((item, i) => {
                  const value = Number(item[config.dataKey1]);
                  // The last item's bottom width matches its top width (rectangle shape)
                  const nextValue = i < data.length - 1 ? Number(data[i + 1][config.dataKey1]) : value;

                  const topW = (value / maxValue) * chartWidth;
                  const botW = (nextValue / maxValue) * chartWidth;

                  const yTop = i * sliceHeight + (i !== 0 ? gap : 0);
                  const yBot = (i + 1) * sliceHeight - (i !== data.length - 1 ? gap : 0);

                  const xTopLeft = (chartWidth - topW) / 2;
                  const xTopRight = xTopLeft + topW;
                  const xBotLeft = (chartWidth - botW) / 2;
                  const xBotRight = xBotLeft + botW;

                  // Drawing trapezoid with SVG path
                  const d = `M ${xTopLeft} ${yTop} L ${xTopRight} ${yTop} L ${xBotRight} ${yBot} L ${xBotLeft} ${yBot} Z`;

                  const opacity = Math.max(0.3, 1 - ((data.length - 1 - i) * 0.18));

                  return (
                    <g key={i} className="group cursor-default transition-all duration-300">
                      <title>{item.name}: {value}</title>
                      <path
                        d={d}
                        fill={brandColor}
                        fillOpacity={opacity}
                        stroke={brandColor}
                        strokeWidth="3"
                        strokeLinejoin="round"
                        className="transition-all duration-500 ease-out group-hover:brightness-125 hover:drop-shadow-[0_0_15px_rgba(64,187,33,0.5)]"
                      />
                      <text
                        x={chartWidth / 2}
                        y={(yTop + yBot) / 2}
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontWeight="900"
                        fontSize="18"
                        style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0)" }}
                        className="pointer-events-none"
                      >
                        {value}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        );
      }
      case 'area':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={brandColor} stopOpacity={0.5} />
                  <stop offset="95%" stopColor={brandColor} stopOpacity={0} />
                </linearGradient>
                {config.dataKey2 && (
                  <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={brandColorAlt} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={brandColorAlt} stopOpacity={0} />
                  </linearGradient>
                )}
                {config.dataKey3 && (
                  <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={brandColor3} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={brandColor3} stopOpacity={0} />
                  </linearGradient>
                )}
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.2} />
              <XAxis dataKey="name" stroke={axisColor} fontSize={10} tickLine={false} axisLine={false} />
              <YAxis
                stroke={axisColor}
                fontSize={10}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => {
                  if (value >= 1000) return `${value / 1000}k`;
                  // Adicionando sufixo '%' se os valores do chart forem de 0 a 100
                  const isPercentage = data.every(d => Number(d[config.dataKey1]) <= 100 && (config.dataKey3 ? Number(d[config.dataKey3]) <= 100 : true));
                  return isPercentage ? `${value}%` : value;
                }}
              />
              <Tooltip content={<CustomTooltip />} />

              <Area type="monotone" dataKey={config.dataKey1} name={config.label1} stroke={brandColor} strokeWidth={2} fillOpacity={1} fill="url(#color1)" activeDot={{ r: 6, fill: brandColor, strokeWidth: 0 }} />

              {config.dataKey2 && (
                <Area type="monotone" dataKey={config.dataKey2} name={config.label2} stroke={brandColorAlt} strokeWidth={2} fillOpacity={1} fill="url(#color2)" activeDot={{ r: 5, fill: brandColorAlt, strokeWidth: 0 }} />
              )}

              {config.dataKey3 && (
                <Area type="monotone" dataKey={config.dataKey3} name={config.label3} stroke={brandColor3} strokeWidth={2} fillOpacity={1} fill="url(#color3)" activeDot={{ r: 4, fill: brandColor3, strokeWidth: 0 }} />
              )}
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
              <XAxis dataKey="name" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.1)' }} />
              <Bar dataKey={config.dataKey1} name={config.label1} fill={brandColor} radius={[4, 4, 0, 0]} />
              {config.dataKey2 && (
                <Bar dataKey={config.dataKey2} name={config.label2} fill={brandColorAlt} radius={[4, 4, 0, 0]} />
              )}
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey={config.dataKey1}
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                strokeWidth={2}
                stroke="hsl(var(--background))"
                label={({ value }) => `${value}%`}
                labelLine={false}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                formatter={(value: string) => <span className="text-xs font-medium text-foreground">{value}</span>}
                iconType="circle"
                iconSize={8}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'line':
      default:
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="hsl(var(--border))" opacity={0.4} />
              <XAxis dataKey="name" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              {config.dataKey2 && (
                <Line type="monotone" dataKey={config.dataKey2} name={config.label2} stroke={brandColorAlt} strokeWidth={2} dot={true} />
              )}
              <Line type="monotone" dataKey={config.dataKey1} name={config.label1} stroke={brandColor} strokeWidth={2} dot={{ r: 4, fill: brandColor, strokeWidth: 0 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="w-full h-full min-h-[300px]">
      {renderChart()}
    </div>
  );
}
