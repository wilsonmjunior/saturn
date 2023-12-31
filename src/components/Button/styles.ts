import { createStyleSheet } from '@/config/unistyles'

export const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors?.primary,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center'
  },
  text: {
    color: theme.colors?.white,
    fontSize: 14
  }
}))
