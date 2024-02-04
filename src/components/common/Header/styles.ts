import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    minHeight: 120,
    backgroundColor: theme.colors?.primary,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  titleWrapper: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginLeft: 16,
    color: theme.colors?.white,
  }
}));
