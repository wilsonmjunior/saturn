import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors?.primary,
    padding: 16,
    minHeight: 140,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: getStatusBarHeight() + 32,
  },
  titleWrapper: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginLeft: 16,
    color: theme.colors?.white,
  },
}));
