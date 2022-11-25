import { useCallback, DragEventHandler } from 'react';

import { BoardCard, IBoardCard } from 'entities/boardCard';

import { IBoardColumn } from '../../model';
import * as S from './styled';

type Props = {
  data: IBoardColumn;
  onDrop: (event: DragEventHandler<HTMLElement>, column: IBoardColumn, card?: IBoardCard) => void;
  onDragStart: (
    event: DragEventHandler<HTMLElement>,
    column: IBoardColumn,
    card: IBoardCard
  ) => void;
  onDragOver: (event: DragEventHandler<HTMLElement>) => void;
};

const BoardColumn = (props: Props) => {
  const { data, onDrop, onDragStart, onDragOver } = props;

  const handleDrop = useCallback(
    (event: DragEventHandler<HTMLElement>, card?: IBoardCard) => onDrop(event, data, card),
    [data, onDrop]
  );

  const handleDragStart = useCallback(
    (event: DragEventHandler<HTMLElement>, card: IBoardCard) => onDragStart(event, data, card),
    [data, onDragStart]
  );

  const handleColumnDrop = (event: DragEventHandler<HTMLElement>) => onDrop(event, data);

  const handleColumnDragOver = (event: DragEventHandler<HTMLElement>) => {
    //@ts-ignore
    event.preventDefault();
  };

  return (
    /* @ts-ignore */
    <S.Column onDrop={handleColumnDrop} onDragOver={handleColumnDragOver}>
      {data.items.map((card) => (
        <BoardCard
          key={card.id}
          data={card}
          draggable
          onDrop={handleDrop}
          onDragStart={handleDragStart}
          onDragOver={onDragOver}
        />
      ))}
    </S.Column>
  );
};

export { BoardColumn };
