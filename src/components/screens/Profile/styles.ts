import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
  },
  slideWrapper: {
    flexDirection: "row",
  },
  slide: {
    flexDirection: "row",
    gap: 4,
    marginLeft: 16,
  },
  signoutWrapper: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
}));
