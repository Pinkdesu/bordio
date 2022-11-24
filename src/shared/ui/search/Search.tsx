import { MouseEvent } from 'react';
import searchSVG from 'shared/assets/icons/search.svg';

import * as S from './styled';

type Props = {
  view?: 'primary' | 'secondary';
  className?: string;
  placeholder?: string;
  onSearch?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Search = (props: Props) => {
  const { view = 'primary', className, placeholder = 'Search...', onSearch } = props;

  return (
    <S.SearchWrapper view={view} className={className}>
      <S.SearchField view={view} placeholder={placeholder} />
      <S.SerchButton view={view} onClick={onSearch}>
        <S.ButtonIcon src={searchSVG} alt="search" />
      </S.SerchButton>
    </S.SearchWrapper>
  );
};

export { Search };
