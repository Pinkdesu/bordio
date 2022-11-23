import userJPG from 'shared/assets/images/user.jpg';

import { IMenuItem, MenuItem } from 'entities/menuItem';

import { PROJECTS_DATA, FAVORITES_DATA } from '../lib';
import * as S from './styled';
import { Logo } from './logo';
import { Workspace } from './workspace';

const Menu = () => {
  const renderItem = (item: IMenuItem, index: number) => (
    <MenuItem key={item.name + index} item={item} />
  );

  return (
    <S.Menu>
      <Logo />
      <S.MenuSearch />
      <Workspace name="My workspace" image={userJPG} />
      <S.FavoritesDetails items={FAVORITES_DATA} text="Favorites" renderItem={renderItem} />
      <S.ProjectsDetails items={PROJECTS_DATA} text="My Projects" renderItem={renderItem} />
    </S.Menu>
  );
};

export { Menu };
