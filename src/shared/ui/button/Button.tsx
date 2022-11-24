import { ReactNode } from 'react';

import * as S from './styled';

type Props = {
  icon: ReactNode;
  text: string;
};

const Button = ({ icon, text }: Props) => (
  <S.Button>
    {icon}
    <S.Text>{text}</S.Text>
  </S.Button>
);

export { Button };
