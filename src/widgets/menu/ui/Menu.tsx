import userJPG from 'shared/assets/images/user.jpg';

import * as C from 'shared/components';

import { MenuItem, PROJECTS_DATA, FAVORITES_DATA } from '../lib';
import * as S from './styled';
import { Logo } from './logo';

const Menu = () => {
  const renderItem = ({ name, path }: MenuItem, index: number) => (
    <S.MenuNavLink key={name + index} to={path}>
      {name}
    </S.MenuNavLink>
  );

  return (
    <S.Menu>
      <Logo />
      <S.MenuSearch />
      <S.MenuNavLink to="/">
        <C.Avatar src={userJPG} />
        <S.WorkspaceName>My workspace</S.WorkspaceName>
      </S.MenuNavLink>
      <S.FavoritesDetails items={FAVORITES_DATA} text="Favorites" renderItem={renderItem} />
      <S.ProjectsDetails items={PROJECTS_DATA} text="My Projects" renderItem={renderItem} />
    </S.Menu>
  );
};

export { Menu };
