import {createUnistyles} from 'react-native-unistyles';

import {theme} from './theme';
import {breakpoints} from './theme/breakpoints';

export const {createStyleSheet, useStyles} = createUnistyles<
  typeof breakpoints,
  typeof theme
>(breakpoints);

export {theme};
