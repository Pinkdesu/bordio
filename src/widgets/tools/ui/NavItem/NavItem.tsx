import { ReactNode } from 'react';
import { NavLinkProps } from 'react-router-dom';

import * as S from './styled';

type Props = NavLinkProps & {
  text: string;
  icon: ReactNode;
};

const NavItem = ({ text, icon, ...otherProps }: Props) => (
  <S.NavItem {...otherProps}>
    {icon}
    <S.Text>{text}</S.Text>
  </S.NavItem>
);

export { NavItem };
