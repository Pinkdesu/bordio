import { memo } from 'react';

import { BoardCard } from 'entities/boardCard';

import { IBoardColumn } from '../../model';
import * as S from './styled';

type Props = {
  data: IBoardColumn;
};

const BoardColumn = memo(({ data }: Props) => (
  <S.Column>
    {data.items.map((card) => (
      <BoardCard key={card.id} data={card} />
    ))}
  </S.Column>
));

export { BoardColumn };
