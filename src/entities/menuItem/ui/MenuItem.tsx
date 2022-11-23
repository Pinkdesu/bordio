import { IMenuItem } from '../lib';
import * as S from './styled';

type Props = {
  item: IMenuItem;
};

const MenuItem = ({ item }: Props) => <S.ItemLink to={item.path}>{item.name}</S.ItemLink>;

export { MenuItem };
