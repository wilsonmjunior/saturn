import { getBottomSpace } from "react-native-iphone-x-helper";

import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
  switchWrapper: {
    marginTop: 24,
  },
  buttonsWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: getBottomSpace() + 16,
    gap: 16,
  },
});
