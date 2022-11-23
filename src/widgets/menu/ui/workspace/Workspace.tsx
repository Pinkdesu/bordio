import * as C from 'shared/components';

import * as S from './styled';

type Props = {
  name: string;
  image: string;
};

const Workspace = ({ name, image }: Props) => (
  <S.Container>
    <C.Avatar src={image} />
    <S.Name>{name}</S.Name>
  </S.Container>
);

export { Workspace };
