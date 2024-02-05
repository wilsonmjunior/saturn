import { createStyleSheet } from "@/config/unistyles";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const stylesheet = createStyleSheet({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 16,
    gap: 8,
    marginHorizontal: 16,
  },
  buttonsWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: getBottomSpace() + 32,
    marginHorizontal: 16,
    gap: 8,
  }
});
