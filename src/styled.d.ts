import 'styled-components';

import { ITheme } from 'shared/assets/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
