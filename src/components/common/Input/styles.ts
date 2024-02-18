import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  input: {
    backgroundColor: theme.colors?.white,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors?.border,
    borderRadius: 8,
    height: 56,
    justifyContent: "center",
  },
}));
