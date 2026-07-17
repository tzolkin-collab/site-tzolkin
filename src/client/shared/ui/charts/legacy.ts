import type { LegacyChartConfig, TzolkinChartDefinition } from './types';

export function isLegacyConfig(
  config: TzolkinChartDefinition | LegacyChartConfig,
): config is LegacyChartConfig {
  return 'dataKey1' in config;
}

/** Primary series label — works with both legacy and new config formats */
export function getChartPrimaryLabel(
  config: TzolkinChartDefinition | LegacyChartConfig,
): string {
  if (isLegacyConfig(config)) return config.label1;
  return config.series[0]?.label ?? '';
}

/** Converts the old dataKey1/2/3 format to the standardized series API */
export function normalizeChartConfig(
  config: TzolkinChartDefinition | LegacyChartConfig,
): TzolkinChartDefinition {
  if (!isLegacyConfig(config)) return config;

  const series: TzolkinChartDefinition['series'] = [
    { dataKey: config.dataKey1, label: config.label1, color: config.color },
  ];

  if (config.dataKey2 && config.label2) {
    series.push({ dataKey: config.dataKey2, label: config.label2, color: config.color2 });
  }
  if (config.dataKey3 && config.label3) {
    series.push({ dataKey: config.dataKey3, label: config.label3, color: config.color3 });
  }

  return {
    type: config.type,
    series,
    colorAxis: config.colorAxis,
  };
}
