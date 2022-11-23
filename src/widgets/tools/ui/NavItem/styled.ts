import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Text = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1rem;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.6875rem 0.625rem;
  gap: 10px;

  &.active {
    & ${Text} {
      color: ${({ theme }) => theme.color.blue800};
    }

    & > svg path {
      fill: ${({ theme }) => theme.color.blue800};
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 4.12px;
      background: ${({ theme }) => theme.color.blue800};
      border-radius: 0px 10px 10px 0px;
    }
  }
`;

export { NavItem, Text };
