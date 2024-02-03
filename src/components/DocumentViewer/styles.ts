import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'

import { createStyleSheet } from '@/config/unistyles';
import { Platform } from 'react-native';

export const stylesheet = createStyleSheet(theme => ({
  safeArea: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  webView: {
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() + 10 : 0,
    marginBottom: getBottomSpace()
  },
  button: {
    backgroundColor: theme.colors?.white,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    bottom: 10,
    borderRadius: 100,
    width: 70,
    height: 70,
  },
}));
