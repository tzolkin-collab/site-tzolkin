'use client';

import React from 'react';
import type { ChartDataPoint, TzolkinChartSeries } from './types';
import { CHART_LAYOUT, resolveSeriesColor } from './theme';

interface FunnelChartProps {
  data: ChartDataPoint[];
  series: TzolkinChartSeries[];
}

export function FunnelChart({ data, series }: FunnelChartProps) {
  const primary = series[0];
  const brandColor = resolveSeriesColor(primary.color, 0);

  const maxValue = Math.max(...data.map((d) => Number(d[primary.dataKey])));
  const chartWidth = 500;
  const chartHeight = 350;
  const sliceHeight = chartHeight / data.length;
  const gap = 2;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden p-2">
      <div className="mb-4 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {data.map((item, i) => {
          const opacity = Math.max(0.3, 1 - (data.length - 1 - i) * 0.18);
          return (
            <div key={i} className="group flex cursor-default items-center gap-2">
              <div
                className="h-4 w-4 rounded-sm transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: brandColor,
                  opacity,
                  boxShadow: `0 0 8px color-mix(in srgb, ${brandColor} 25%, transparent)`,
                }}
              />
              <span className="text-sm font-bold tracking-wide text-foreground/90 transition-colors group-hover:text-foreground">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="relative w-full max-w-[500px] flex-1 min-h-0">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full overflow-visible"
        >
          {data.map((item, i) => {
            const value = Number(item[primary.dataKey]);
            const nextValue =
              i < data.length - 1 ? Number(data[i + 1][primary.dataKey]) : value;

            const topW = (value / maxValue) * chartWidth;
            const botW = (nextValue / maxValue) * chartWidth;

            const yTop = i * sliceHeight + (i !== 0 ? gap : 0);
            const yBot = (i + 1) * sliceHeight - (i !== data.length - 1 ? gap : 0);

            const xTopLeft = (chartWidth - topW) / 2;
            const xTopRight = xTopLeft + topW;
            const xBotLeft = (chartWidth - botW) / 2;
            const xBotRight = xBotLeft + botW;

            const d = `M ${xTopLeft} ${yTop} L ${xTopRight} ${yTop} L ${xBotRight} ${yBot} L ${xBotLeft} ${yBot} Z`;
            const opacity = Math.max(0.3, 1 - (data.length - 1 - i) * 0.18);

            return (
              <g key={i} className="group cursor-default transition-all duration-300">
                <title>
                  {item.name}: {value}
                </title>
                <path
                  d={d}
                  fill={brandColor}
                  fillOpacity={opacity}
                  stroke={brandColor}
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  className="transition-all duration-500 ease-out group-hover:brightness-125"
                />
                <text
                  x={chartWidth / 2}
                  y={(yTop + yBot) / 2}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="var(--background)"
                  fontWeight="800"
                  fontSize="16"
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
