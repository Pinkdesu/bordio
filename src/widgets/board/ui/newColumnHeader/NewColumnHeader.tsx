import { ReactComponent as SmallPlusSVG } from 'shared/assets/icons/smallPlus.svg';

import * as S from './styled';

const NewColumnHeader = () => (
  <S.Container>
    <S.AddButton>
      <SmallPlusSVG />
      <S.BtnText>Create status</S.BtnText>
    </S.AddButton>
  </S.Container>
);

export { NewColumnHeader };
