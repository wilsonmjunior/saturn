import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  header: {
    marginTop: getStatusBarHeight() + 48,
    alignItems: "center",
  },
  title: {
    fontSize: theme.fontSize?.lg,
    fontWeight: "bold",
  },
  content: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  form: {
    gap: 16,
  },
  buttonsWrapper: {
    marginTop: 32,
    gap: 8,
  },
}));
