'use client';

import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, LineChart, Line, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from 'recharts';

interface ServiceChartProps {
  data: any[];
  config: {
    type: 'area' | 'bar' | 'line' | 'pie';
    dataKey1: string;
    label1: string;
    dataKey2?: string;
    label2?: string;
  };
}

const PIE_COLORS = ['#FFD100', '#333333', '#888888', '#BBBBBB'];

export function ServiceChart({ data, config }: ServiceChartProps) {
  const [colors, setColors] = React.useState({
    text: 'currentColor',
    brand: '#EAEAEA',
    brandAlt: '#555555'
  });

  React.useEffect(() => {
    const rootStyles = getComputedStyle(document.body);
    const getColor = (vari: string) => {
      const val = rootStyles.getPropertyValue(vari).trim();
      if (!val) return 'currentColor';
      return val.startsWith('#') || val.startsWith('rgb') ? val : `hsl(${val})`;
    };

    setColors({
      text: getColor('--muted-foreground'),
      brand: getColor('--brand'),
      brandAlt: getColor('--foreground')
    });
  }, []);

  const textColor = colors.text;
  const brandColor = colors.brand;
  const brandColorAlt = colors.brandAlt;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border p-3 rounded-lg shadow-xl text-sm">
          {label && <p className="font-bold mb-2 text-foreground">{label}</p>}
          {payload.map((entry: any, index: number) => (
            <p key={index} className="flex items-center gap-2" style={{ color: entry.color || entry.payload?.fill }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.payload?.fill }} />
              <span className="font-medium">{entry.name}:</span> {entry.value}{config.type === 'pie' ? '%' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (config.type) {
      case 'area':
        return (
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={brandColor} stopOpacity={0.3} />
                <stop offset="95%" stopColor={brandColor} stopOpacity={0} />
              </linearGradient>
              {config.dataKey2 && (
                <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={brandColorAlt} stopOpacity={0.1} />
                  <stop offset="95%" stopColor={brandColorAlt} stopOpacity={0} />
                </linearGradient>
              )}
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
            <XAxis dataKey="name" stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            {config.dataKey2 && (
              <Area type="monotone" dataKey={config.dataKey2} name={config.label2} stroke={brandColorAlt} fillOpacity={1} fill="url(#color2)" />
            )}
            <Area type="monotone" dataKey={config.dataKey1} name={config.label1} stroke={brandColor} strokeWidth={2} fillOpacity={1} fill="url(#color1)" />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
            <XAxis dataKey="name" stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.1)' }} />
            <Bar dataKey={config.dataKey1} name={config.label1} fill={brandColor} radius={[4, 4, 0, 0]} />
            {config.dataKey2 && (
              <Bar dataKey={config.dataKey2} name={config.label2} fill={brandColorAlt} radius={[4, 4, 0, 0]} />
            )}
          </BarChart>
        );
      case 'pie':
        return (
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
              label={({ name, value }) => `${value}%`}
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
        );
      case 'line':
      default:
        return (
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
            <XAxis dataKey="name" stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            {config.dataKey2 && (
              <Line type="monotone" dataKey={config.dataKey2} name={config.label2} stroke={brandColorAlt} strokeWidth={2} dot={false} />
            )}
            <Line type="monotone" dataKey={config.dataKey1} name={config.label1} stroke={brandColor} strokeWidth={2} dot={{ r: 4, fill: brandColor, strokeWidth: 0 }} activeDot={{ r: 6 }} />
          </LineChart>
        );
    }
  };

  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
}
