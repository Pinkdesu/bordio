import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Routing } from 'pages';
import { Menu } from 'widgets/menu';
import { baseTheme } from 'shared/assets/theme';

import * as S from './styled';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <Menu />
    <S.MainContent>
      <Routing />
    </S.MainContent>
    <S.GlobalStyles />
  </ThemeProvider>
);

export { App };
