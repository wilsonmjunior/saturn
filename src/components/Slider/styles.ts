import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet(() => ({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  slide: {
    flexDirection: 'row',
    gap: 16,
    marginLeft: 16,
  }
}));
