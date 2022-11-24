import { memo } from 'react';

import { Option } from '../types';
import * as S from './styled';

type Props = {
  option: Option;
  isActive: boolean;
  onSelect: (option: Option) => void;
};

const ListItem = memo((props: Props) => {
  const { option, isActive, onSelect } = props;

  const handleClick = () => onSelect(option);

  return (
    <li>
      <S.Button isActive={isActive} onClick={handleClick}>
        {option.label}
      </S.Button>
    </li>
  );
});

export { ListItem };
