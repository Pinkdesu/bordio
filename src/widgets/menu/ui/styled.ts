import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { getTransition } from 'shared/helpers';
import { Search } from 'shared/ui/search';
import { Details } from 'shared/ui/details';

import { MenuItem } from '../model';

const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.sizis.menu};
  height: 100vh;
  padding: 1.625rem 1rem;
  background-color: ${({ theme }) => theme.color.ocean800};
`;

const MenuSearch = styled(Search)`
  margin-bottom: 19px;
`;

const MenuNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin: 0 -1rem;
  padding: 0.375rem 1rem;
  line-height: 1rem;

  ${({ theme }) => getTransition(theme.duration.normal)}

  &:hover,
  &.active {
    color: ${({ theme }) => theme.color.white};
  }

  &.active {
    background-color: ${({ theme }) => theme.color.ocean400};
  }
`;

const WorkspaceName = styled.span`
  margin-left: 8px;
`;

const FavoritesDetails = styled(Details<MenuItem>)`
  margin-top: 13px;
`;

const ProjectsDetails = styled(Details<MenuItem>)`
  margin-top: 18px;
`;

export { Menu, MenuSearch, MenuNavLink, WorkspaceName, FavoritesDetails, ProjectsDetails };
