export const GA_TRACKING_ID = "G-XKXE36EJMP";

export const sendEvent = ({ action, category, label, value }: { action: string; category: string; label: string; value?: number }) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  } else {
    console.warn("gtag not found"); // debug
  }
};
