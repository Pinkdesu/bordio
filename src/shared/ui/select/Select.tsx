import { useState, useCallback } from 'react';

import { ReactComponent as ArrowDownSVG } from 'shared/assets/icons/arrowDown.svg';

import { Option } from './types';
import * as S from './styled';
import { ListItem } from './listItem';

type Props = {
  value?: Option['value'];
  options: Option[];
  onSelect: (value: Option) => void;
};

const Select = (props: Props) => {
  const { value, options, onSelect } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.value === value) ?? null
  );

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const handleSelect = useCallback(
    (option: Option) => {
      onSelect(option);
      setIsVisible(false);
      setSelectedOption(option);
    },
    [onSelect]
  );

  const btnText = selectedOption ? selectedOption.label : 'None';
  const selectedValue = selectedOption ? selectedOption.value : selectedOption;

  return (
    <S.Container>
      <S.Button isActive={isVisible} onClick={toggleVisibility}>
        <S.Text>{btnText}</S.Text>
        <ArrowDownSVG />
      </S.Button>
      {isVisible && (
        <S.List>
          {options.map((option) => (
            <ListItem
              key={option.value}
              option={option}
              isActive={selectedValue === option.value}
              onSelect={handleSelect}
            />
          ))}
        </S.List>
      )}
    </S.Container>
  );
};

export { Select };
