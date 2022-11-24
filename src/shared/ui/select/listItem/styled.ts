import styled from 'styled-components';

import { getTransition } from 'shared/helpers';

import { ButtonProps } from '../styled.types';

const Button = styled.button<ButtonProps>`
  width: 100%;
  text-align: left;
  padding: 0.75rem 0.5rem;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1rem;
  border-radius: ${({ theme }) => theme.radius.tiny};
  background-color: ${({ theme, isActive }) => (isActive ? theme.color.gray500 : 'inherit')};

  ${({ theme }) => getTransition(theme.duration.normal, 'background-color')}

  &:hover {
    background-color: ${({ theme }) => theme.color.gray500};
  }
`;

export { Button };
