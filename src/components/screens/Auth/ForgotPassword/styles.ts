import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 32, 
    marginHorizontal: 16,
    gap: 8,
  },
  titleWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  label: {
    marginTop: 16,
    marginBottom: 16,
  },
});
