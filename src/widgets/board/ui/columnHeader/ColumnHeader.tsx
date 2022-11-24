import { memo } from 'react';

import * as S from './styled';

type Props = {
  label: string;
  count: number;
};

const ColumnHeader = memo(({ label, count }: Props) => (
  <S.Container>
    <S.Title>
      {label}
      <S.Counter>{count}</S.Counter>
    </S.Title>
  </S.Container>
));

export { ColumnHeader };
