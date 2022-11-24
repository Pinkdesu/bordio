import { ReactComponent as BellSVG } from 'shared/assets/icons/bell.svg';

import * as S from './styled';

type Props = {
  count: number;
};

const BellButton = ({ count }: Props) => (
  <S.Button>
    <BellSVG />
    <S.Counter>{count > 99 ? '99+' : count}</S.Counter>
  </S.Button>
);

export { BellButton };
