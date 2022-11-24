import { memo } from 'react';

import { IBoardCard, Status } from '../model';
import * as S from './styled';

type Props = {
  data: IBoardCard;
};

const BoardCard = memo(({ data }: Props) => {
  const { date, style, status, description } = data;

  const isCompleted = status === Status.Completed;

  return (
    <S.Container cardStyle={style} isCompleted={isCompleted}>
      <S.Description isCompleted={isCompleted}>{description}</S.Description>
      <S.Time cardStyle={style} isCompleted={isCompleted}>
        {date}h
      </S.Time>
    </S.Container>
  );
});

export { BoardCard };
