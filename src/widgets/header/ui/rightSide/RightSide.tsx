import { Search } from 'shared/ui/search';
import { BellButton } from 'shared/ui/bellButton';
import * as C from 'shared/components';
import userJPG from 'shared/assets/images/user.jpg';

import * as S from '../styled';

const RightSide = () => (
  <S.SideContainer>
    <Search view="secondary" />
    <BellButton count={100} />
    <C.Avatar src={userJPG} />
  </S.SideContainer>
);

export { RightSide };
