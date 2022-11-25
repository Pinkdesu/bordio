import { useState } from 'react';

import { Button } from 'shared/ui/button';
import { Select, Option } from 'shared/ui/select';
import { ReactComponent as PlusSVG } from 'shared/assets/icons/plus.svg';

import { FIRST_FILTER_OPTIONS, SECOND_FILTER_OPTIONS } from '../../model';
import * as S from '../styled';

const LeftSide = () => {
  const [firstValue, setFirstValue] = useState<Option>(FIRST_FILTER_OPTIONS.at(-1)!);
  const [secondValue, setSecondValue] = useState<Option>(SECOND_FILTER_OPTIONS[0]);

  return (
    <S.SideContainer>
      <Button icon={<PlusSVG />} text="Add new" />
      <Select value={firstValue.value} options={FIRST_FILTER_OPTIONS} onSelect={setFirstValue} />
      <Select value={secondValue.value} options={SECOND_FILTER_OPTIONS} onSelect={setSecondValue} />
    </S.SideContainer>
  );
};

export { LeftSide };
