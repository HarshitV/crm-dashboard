import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        // Brand
        "brand-primary": { value: "#5932EA" },
        "brand-accent": { value: "#16C098" },
        // Backgrounds
        "bg-main": { value: "#FAFBFF" },
        "bg-card": { value: "#FFFFFF" },
        "bg-table-header": { value: "#F9FBFF" },
        // Text
        "text-main": { value: "#000000" },
        "text-secondary": { value: "#9197B3" },
        "text-muted": { value: "#757575" },
        "text-placeholder": { value: "#7E7E7E" },
        "text-table-header": { value: "#B5B7C0" },
        // Border
        "border-main": { value: "#E2ECF9" },
        "border-table-separator": { value: "#F0F0F0" },
        // Status
        "status-active-bg": { value: "#16C09861" },
        "status-active-border": { value: "#00B087" },
        "status-active-text": { value: "#008767" },
        "status-inactive-bg": { value: "#FFC5C5" },
        "status-inactive-border": { value: "#DF0404" },
        "status-inactive-text": { value: "#DF0404" },
        // UI
        "button-primary-bg": { value: "#5A32EA" },
        "button-primary-text": { value: "#FFFFFF" },
        "button-secondary-bg": { value: "#F5F5F5" },
        "button-secondary-text": { value: "#404B52" },
        // Error
        "error-main": { value: "#D0004B" },
        // Success
        "success-main": { value: "#00AC4F" },
        // Misc
        "avatar-border": { value: "#FFFFFF" },
        "dashboard-label": { value: "#ACACAC" },
        "dashboard-value": { value: "#333333" },
        "dashboard-muted": { value: "#292D32" },
      },
    },
  },
});
