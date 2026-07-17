export type TzolkinChartType = 'area' | 'bar' | 'line' | 'pie' | 'funnel';

export type ChartColorToken =
  | 'brand'
  | 'brand2'
  | 'positive'
  | 'negative'
  | 'muted'
  | 'chart1'
  | 'chart2'
  | 'chart3'
  | 'chart4'
  | 'chart5';

export interface TzolkinChartSeries {
  dataKey: string;
  label: string;
  color?: ChartColorToken | string;
}

export interface TzolkinChartDefinition {
  type: TzolkinChartType;
  series: TzolkinChartSeries[];
  /** Override axis tick color */
  colorAxis?: ChartColorToken | string;
}

export type ChartDataPoint = Record<string, string | number | boolean>;

/** @deprecated Prefer TzolkinChartDefinition via builders — kept for backward compat */
export interface LegacyChartConfig {
  type: TzolkinChartType;
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
}

export interface TzolkinChartProps {
  data: ChartDataPoint[];
  config: TzolkinChartDefinition | LegacyChartConfig;
  className?: string;
  minHeight?: number;
}
