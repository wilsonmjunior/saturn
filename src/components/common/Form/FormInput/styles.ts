import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  errorText: {
   color: theme.colors?.error,
  },
}));
