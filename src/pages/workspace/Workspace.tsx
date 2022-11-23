import { Outlet } from 'react-router-dom';

import { Tools } from 'widgets/tools';

import * as S from './styled';

const Workspace = () => (
  <S.Container>
    <Tools />
    <Outlet />
  </S.Container>
);

export { Workspace };
