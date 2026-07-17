import type {
  ChartDataPoint,
  TzolkinChartDefinition,
  TzolkinChartSeries,
  TzolkinChartType,
  ChartColorToken,
} from './types';

interface SeriesInput {
  dataKey: string;
  label: string;
  color?: ChartColorToken | string;
}

interface ChartBuilderOptions {
  type: TzolkinChartType;
  series: SeriesInput[];
  colorAxis?: ChartColorToken | string;
}

/** Standardized factory for chart definitions */
export function defineChart(options: ChartBuilderOptions): TzolkinChartDefinition {
  return {
    type: options.type,
    series: options.series,
    colorAxis: options.colorAxis,
  };
}

/** Shorthand for a single data series */
export function series(
  dataKey: string,
  label: string,
  color?: ChartColorToken | string,
): TzolkinChartSeries {
  return { dataKey, label, color };
}

/** Convenience builders per chart type */
export const chart = {
  area: (primary: SeriesInput, ...rest: SeriesInput[]) =>
    defineChart({ type: 'area', series: [primary, ...rest] }),

  bar: (primary: SeriesInput, ...rest: SeriesInput[]) =>
    defineChart({ type: 'bar', series: [primary, ...rest] }),

  line: (primary: SeriesInput, ...rest: SeriesInput[]) =>
    defineChart({ type: 'line', series: [primary, ...rest] }),

  pie: (primary: SeriesInput) =>
    defineChart({ type: 'pie', series: [primary] }),

  funnel: (primary: SeriesInput) =>
    defineChart({ type: 'funnel', series: [primary] }),
};

/** Typed data point builder */
export function dataPoint(
  name: string,
  values: Record<string, number>,
  extras?: Record<string, string>,
): ChartDataPoint {
  return { name, ...values, ...extras };
}
