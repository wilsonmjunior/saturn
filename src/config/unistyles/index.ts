import {createUnistyles} from 'react-native-unistyles';

import {theme} from './theme';
import {breakpoints} from './theme/breakpoints';

export const {createStyleSheet, useStyles} = createUnistyles<
  typeof breakpoints,
  Partial<typeof theme>
>(breakpoints);

export {theme};
