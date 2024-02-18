import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: theme.colors?.primary,
  },
  button: {
    marginTop: 74,
    marginRight: 32,
    alignSelf: "flex-end",
  },
}));
