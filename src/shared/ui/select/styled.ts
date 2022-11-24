import styled from 'styled-components';

import { getTransition } from 'shared/helpers';

import { ButtonProps } from './styled.types';

const Container = styled.div`
  position: relative;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.875rem;
  border-radius: ${({ theme }) => theme.radius.normal};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.gray600 : theme.color.gray500};

  ${({ theme }) => getTransition(theme.duration.normal, 'background-color')}

  & > svg {
    transform: ${({ isActive }) => isActive && 'rotate(180deg)'};

    path {
      fill: ${({ theme }) => theme.color.gray800};
    }
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.font.normal};
  line-height: 1rem;
  margin-right: 8px;
`;

const List = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  z-index: 10;
  padding: 0.375rem;
  min-width: 132px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.radius.small};
  background-color: ${({ theme }) => theme.color.white};
`;

export { Container, Button, Text, List };
