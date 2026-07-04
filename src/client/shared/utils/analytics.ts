export type EventName = 'lead' | 'initiate_checkout' | 'page_view' | 'form_started';

interface CustomWindow extends Window {
  dataLayer?: Record<string, unknown>[];
  utmify?: (action: string, eventName: string, payload?: Record<string, unknown>) => void;
}

export const trackEvent = (eventName: EventName, payload?: Record<string, unknown>) => {
  try {
    const win = typeof window !== 'undefined' ? (window as unknown as CustomWindow) : null;

    // 1. Disparo para o Google Tag Manager (DataLayer)
    if (win && win.dataLayer) {
      win.dataLayer.push({
        event: eventName,
        ...payload
      });
    }

    // 2. Disparo para UTMify
    if (win && win.utmify) {
      win.utmify('track', eventName, payload);
    }
    
    // Fallback de logging em dev mode
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Tracked] ${eventName}`, payload);
    }

  } catch (err) {
    console.error('[Analytics Error]', err);
  }
};
