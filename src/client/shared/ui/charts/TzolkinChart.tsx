'use client';

import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from 'recharts';
import { useTheme } from 'next-themes';

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { cn } from '@/lib/utils';

import { FunnelChart } from './FunnelChart';
import { normalizeChartConfig } from './legacy';
import {
  buildChartConfig,
  CHART_LAYOUT,
  detectPercentageData,
  formatAxisValue,
  getPiePalette,
  resolveSeriesColor,
} from './theme';
import type { TzolkinChartProps } from './types';

export function TzolkinChart({
  data,
  config: rawConfig,
  className,
  minHeight = CHART_LAYOUT.minHeight,
}: TzolkinChartProps) {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, [resolvedTheme]);

  const config = React.useMemo(() => normalizeChartConfig(rawConfig), [rawConfig]);
  const chartConfig = React.useMemo(() => buildChartConfig(config.series), [config.series]);
  const dataKeys = config.series.map((s) => s.dataKey);
  const isPercentage = detectPercentageData(data, dataKeys);
  const isPie = config.type === 'pie';

  if (!mounted) {
    return <div className={cn('h-full w-full', className)} style={{ minHeight }} />;
  }

  if (config.type === 'funnel') {
    return (
      <div className={cn('h-full w-full', className)}>
        <FunnelChart data={data} series={config.series} />
      </div>
    );
  }

  const axisColor = config.colorAxis
    ? resolveSeriesColor(config.colorAxis, 0)
    : undefined;

  const tooltipSuffix = isPie || isPercentage ? '%' : '';

  const cartesianProps = {
    data,
    margin: CHART_LAYOUT.margin,
  };

  const axisProps = {
    tickLine: false as const,
    axisLine: false as const,
    tick: { fontSize: CHART_LAYOUT.axisFontSize, fill: axisColor },
  };

  const yAxisFormatter = (value: number) => formatAxisValue(value, isPercentage);

  const renderCartesianChildren = () => (
    <>
      <CartesianGrid
        strokeDasharray="4 4"
        vertical={config.type === 'line'}
        stroke="var(--border)"
        opacity={CHART_LAYOUT.gridOpacity}
      />
      <XAxis dataKey="name" {...axisProps} />
      <YAxis {...axisProps} tickFormatter={yAxisFormatter} width={48} />
      <ChartTooltip
        content={
          <ChartTooltipContent
            className="max-w-[280px] border-border/60 bg-background/95 backdrop-blur-sm"
            formatter={(value, name, item) => {
              const description = item.payload?.description;
              return (
                <div className="flex w-full flex-col gap-1">
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-muted-foreground">{name}</span>
                    <span className="font-mono font-semibold tabular-nums text-foreground">
                      {value}
                      {tooltipSuffix}
                    </span>
                  </div>
                  {description && (
                    <p className="text-[11px] leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  )}
                </div>
              );
            }}
          />
        }
        cursor={{ fill: 'color-mix(in srgb, var(--muted) 12%, transparent)' }}
      />
      {/* Legenda sempre presente p/ ≥2 séries (identidade nunca só por cor);
          série única não leva legenda — o título da seção já a nomeia. */}
      {config.series.length >= 2 && (
        <ChartLegend
          content={<ChartLegendContent className="text-xs font-medium text-foreground" />}
        />
      )}
    </>
  );

  return (
    <ChartContainer
      config={chartConfig}
      className={cn('aspect-auto h-full w-full', className)}
      style={{ minHeight }}
    >
      {config.type === 'area' && (
        <AreaChart {...cartesianProps}>
          <defs>
            {config.series.map((s, i) => (
              <linearGradient key={s.dataKey} id={`fill-${s.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={`var(--color-${s.dataKey})`} stopOpacity={0.35} />
                <stop offset="95%" stopColor={`var(--color-${s.dataKey})`} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>
          {renderCartesianChildren()}
          {config.series.map((s) => (
            <Area
              key={s.dataKey}
              type="monotone"
              dataKey={s.dataKey}
              name={s.label}
              stroke={`var(--color-${s.dataKey})`}
              strokeWidth={CHART_LAYOUT.strokeWidth}
              fill={`url(#fill-${s.dataKey})`}
              fillOpacity={1}
              activeDot={{
                r: CHART_LAYOUT.activeDotRadius,
                fill: `var(--color-${s.dataKey})`,
                stroke: 'var(--background)',
                strokeWidth: 2,
              }}
            />
          ))}
        </AreaChart>
      )}

      {config.type === 'bar' && (
        <BarChart {...cartesianProps}>
          {renderCartesianChildren()}
          {config.series.map((s) => (
            <Bar
              key={s.dataKey}
              dataKey={s.dataKey}
              name={s.label}
              fill={`var(--color-${s.dataKey})`}
              radius={CHART_LAYOUT.barRadius}
              maxBarSize={48}
              isAnimationActive={false}
            />
          ))}
        </BarChart>
      )}

      {config.type === 'line' && (
        <LineChart {...cartesianProps}>
          {renderCartesianChildren()}
          {config.series.map((s) => (
            <Line
              key={s.dataKey}
              type="monotone"
              dataKey={s.dataKey}
              name={s.label}
              stroke={`var(--color-${s.dataKey})`}
              strokeWidth={CHART_LAYOUT.strokeWidth}
              dot={{
                r: CHART_LAYOUT.dotRadius,
                fill: `var(--color-${s.dataKey})`,
                stroke: 'var(--background)',
                strokeWidth: 2,
              }}
              activeDot={{
                r: CHART_LAYOUT.activeDotRadius,
                fill: `var(--color-${s.dataKey})`,
                stroke: 'var(--background)',
                strokeWidth: 2,
              }}
            />
          ))}
        </LineChart>
      )}

      {config.type === 'pie' && (
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="border-border/60 bg-background/95 backdrop-blur-sm"
                hideLabel
                formatter={(value, name) => (
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-muted-foreground">{name}</span>
                    <span className="font-mono font-semibold tabular-nums">{value}%</span>
                  </div>
                )}
              />
            }
          />
          <Pie
            data={data}
            dataKey={config.series[0].dataKey}
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={CHART_LAYOUT.pie.outerRadius}
            innerRadius={CHART_LAYOUT.pie.innerRadius}
            strokeWidth={CHART_LAYOUT.pie.strokeWidth}
            stroke="var(--background)"
            paddingAngle={2}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={getPiePalette()[index % getPiePalette().length]} />
            ))}
          </Pie>
          <ChartLegend
            content={<ChartLegendContent className="text-xs font-medium text-foreground" />}
          />
        </PieChart>
      )}
    </ChartContainer>
  );
}
