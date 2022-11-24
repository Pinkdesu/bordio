import { Outlet } from 'react-router-dom';

import { Tools } from 'widgets/tools';

import * as S from './styled';

const Workspace = () => (
  <S.Container>
    <Tools />
    <S.PageContainer>
      <Outlet />
    </S.PageContainer>
  </S.Container>
);

export { Workspace };
