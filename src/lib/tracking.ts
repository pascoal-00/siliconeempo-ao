type Params = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Envia o evento para Meta Pixel, GA4 e GTM (quando presentes). */
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const standard = ["PageView", "ViewContent", "Purchase", "InitiateCheckout"];
  window.fbq?.(standard.includes(event) ? "track" : "trackCustom", event, params);
  window.gtag?.("event", event, params);
  window.dataLayer?.push({ event, ...params });
  if (import.meta.env.DEV) console.info("[track]", event, params);
}
