import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: getStatusBarHeight() + 32,
    marginBottom: 8,
  },
});
