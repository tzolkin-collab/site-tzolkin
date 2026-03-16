export type EventName = 'lead' | 'initiate_checkout' | 'page_view' | 'form_started';

export const trackEvent = (eventName: EventName, payload?: Record<string, any>) => {
  try {
    // 1. Disparo para o Google Tag Manager (DataLayer)
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...payload
      });
    }

    // 2. Disparo para UTMify
    // A documentação do UTMify geralmente rastreia leads de forma autônoma por campos de form, 
    // mas se quisermos forçar o push de evento pra plataforma nativa (se exposta no window):
    if (typeof window !== 'undefined' && (window as any).utmify) {
      (window as any).utmify('track', eventName, payload);
    }
    
    // Fallback de logging em dev mode
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Tracked] ${eventName}`, payload);
    }

  } catch (err) {
    console.error('[Analytics Error]', err);
  }
};
