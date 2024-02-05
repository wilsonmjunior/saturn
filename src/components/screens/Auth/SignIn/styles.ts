import { createStyleSheet } from "@/config/unistyles";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 16,
    gap: 16,
    marginHorizontal: 16,
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  forgotPasswordText: {
    color: theme.colors?.primary,
  },
  buttonsWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: getBottomSpace() + 32,
    marginHorizontal: 16,
    gap: 16,
  }
}));
