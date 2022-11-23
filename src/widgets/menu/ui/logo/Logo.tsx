import { ReactComponent as LogoSVG } from 'shared/assets/icons/logo.svg';

import * as S from './styled';

const Logo = () => (
  <S.LogoLink to="/">
    <LogoSVG />
  </S.LogoLink>
);

export { Logo };
