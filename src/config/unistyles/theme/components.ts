import {colors} from './colors';

export const components = {
  button: {
    base: {
      backgroundColor: colors.primary,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
    },
  },
  buttonText: {
    base: {
      color: colors.white,
    },
    outline: {
      color: colors.primary,
    },
  },
} as const;
