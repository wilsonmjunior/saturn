import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors?.primary,
    padding: 16,
    borderRadius: 12,
  },
  iconAlign: {
    alignItems: "flex-end",
  },
  text: {
    color: theme.colors?.white,
    fontSize: 14,
  },
}));
