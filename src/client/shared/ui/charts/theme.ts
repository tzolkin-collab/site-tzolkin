import type { ChartConfig } from '@/components/ui/chart';
import type { ChartColorToken, TzolkinChartSeries } from './types';

/** Semantic color tokens mapped to CSS variables */
export const CHART_COLOR_TOKENS: Record<ChartColorToken, string> = {
  brand: 'var(--brand)',
  brand2: 'var(--brand2)',
  positive: 'var(--chart-positive)',
  negative: 'var(--chart-negative)',
  muted: 'var(--muted-foreground)',
  chart1: 'var(--chart-1)',
  chart2: 'var(--chart-2)',
  chart3: 'var(--chart-3)',
  chart4: 'var(--chart-4)',
  chart5: 'var(--chart-5)',
};

/**
 * Default categorical series palette — order matters for multi-series charts.
 * Validated (dataviz six-checks) in light e dark: verde→índigo→magenta→âmbar→aqua.
 * NÃO usar tokens de status (positive/negative) aqui — eles têm significado
 * semântico reservado (alta/baixa) e são passados explicitamente por série.
 */
export const DEFAULT_SERIES_COLORS: ChartColorToken[] = [
  'chart1',
  'chart2',
  'chart3',
  'chart4',
  'chart5',
];

export const CHART_LAYOUT = {
  margin: { top: 12, right: 12, left: 0, bottom: 4 },
  minHeight: 300,
  axisFontSize: 11,
  gridOpacity: 0.18,
  strokeWidth: 2,
  activeDotRadius: 6,
  dotRadius: 4,
  barRadius: [6, 6, 0, 0] as [number, number, number, number],
  pie: {
    outerRadius: 110,
    innerRadius: 58,
    strokeWidth: 2,
  },
} as const;

export function resolveSeriesColor(
  color: ChartColorToken | string | undefined,
  fallbackIndex: number,
): string {
  if (!color) {
    return CHART_COLOR_TOKENS[DEFAULT_SERIES_COLORS[fallbackIndex % DEFAULT_SERIES_COLORS.length]];
  }
  if (color in CHART_COLOR_TOKENS) {
    return CHART_COLOR_TOKENS[color as ChartColorToken];
  }
  return color;
}

export function buildChartConfig(series: TzolkinChartSeries[]): ChartConfig {
  const config: ChartConfig = {};

  series.forEach((s, index) => {
    config[s.dataKey] = {
      label: s.label,
      color: resolveSeriesColor(s.color, index),
    };
  });

  return config;
}

export function formatAxisValue(value: number, isPercentage: boolean): string {
  if (isPercentage) return `${value}%`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(value >= 10_000 ? 0 : 1)}k`;
  return String(value);
}

export function detectPercentageData(
  data: Record<string, string | number | boolean>[],
  keys: string[],
): boolean {
  return keys.every((key) =>
    data.every((d) => {
      const val = Number(d[key]);
      return Number.isFinite(val) && val >= 0 && val <= 100;
    }),
  );
}

export function getPiePalette(): string[] {
  return [
    CHART_COLOR_TOKENS.chart1,
    CHART_COLOR_TOKENS.chart2,
    CHART_COLOR_TOKENS.chart3,
    CHART_COLOR_TOKENS.chart4,
    CHART_COLOR_TOKENS.chart5,
  ];
}
