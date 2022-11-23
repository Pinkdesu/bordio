import { MouseEvent } from 'react';
import searchSVG from 'shared/assets/icons/search.svg';

import * as S from './styled';

type Props = {
  className?: string;
  placeholder?: string;
  onSearch?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Search = (props: Props) => {
  const { className, placeholder = 'Search...', onSearch } = props;

  return (
    <S.SearchWrapper className={className}>
      <S.SearchField placeholder={placeholder} />
      <S.SerchButton onClick={onSearch}>
        <S.ButtonIcon src={searchSVG} alt="search" />
      </S.SerchButton>
    </S.SearchWrapper>
  );
};

export { Search };
