import * as S from './styled';
import { LeftSide } from './leftSide';
import { RightSide } from './rightSide';

const Header = () => (
  <S.Container>
    <LeftSide />
    <RightSide />
  </S.Container>
);

export { Header };
