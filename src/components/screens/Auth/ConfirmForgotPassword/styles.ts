import { createStyleSheet } from "@/config/unistyles";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const stylesheet = createStyleSheet({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 32, 
    marginHorizontal: 16,
    gap: 8,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  label: {
    marginTop: 16,
    marginBottom: 16,
  },
  sendButtonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: getBottomSpace() + 32,
    marginHorizontal: 16,
  }
});
