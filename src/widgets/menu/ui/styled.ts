import styled from 'styled-components';

import { IMenuItem } from 'entities/menuItem';
import { Search } from 'shared/ui/search';
import { Details } from 'shared/ui/details';

const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.ocean800};
  width: 219px;
  height: 100%;
  padding: 1.625rem 1rem;
`;

const MenuSearch = styled(Search)`
  margin-bottom: 19px;
`;

const FavoritesDetails = styled(Details<IMenuItem>)`
  margin-top: 13px;
`;

const ProjectsDetails = styled(Details<IMenuItem>)`
  margin-top: 18px;
`;

export { Menu, MenuSearch, FavoritesDetails, ProjectsDetails };
