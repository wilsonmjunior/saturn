import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    minHeight: 100,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
    marginHorizontal: 16,
  },
}));
