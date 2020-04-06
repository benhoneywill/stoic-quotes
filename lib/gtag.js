export const GA_TRACKING_ID = "UA-127380262-4";

export const pageView = url => {
  if (process.env.NODE_ENV !== "production") return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
    anonymize_ip: true
  });
};

export const event = ({ action, category, label, value }) => {
  if (process.env.NODE_ENV !== "production") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    anonymize_ip: true
  });
};
