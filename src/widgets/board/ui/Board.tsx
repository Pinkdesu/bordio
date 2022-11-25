import { useState, useCallback, DragEventHandler } from 'react';

import { IBoardCard } from 'entities/boardCard';

import { IBoardColumn } from '../model';
import { addCardToColumn, removeCardFromColumn, moveCardInColumn } from '../helpers';
import { BoardColumn } from './boardColumn';
import { NewColumnHeader } from './newColumnHeader';
import { ColumnHeader } from './columnHeader';
import * as S from './styled';

type Props = {
  data: IBoardColumn[];
};

const Board = ({ data }: Props) => {
  const [boardData, setBoardData] = useState<IBoardColumn[]>(data);
  const [currentCard, setCurrentCard] = useState<IBoardCard | null>(null);
  const [currentColumn, setCurrentColumn] = useState<IBoardColumn | null>(null);

  const handleDrop = useCallback(
    (event: DragEventHandler<HTMLElement>, column: IBoardColumn, card?: IBoardCard) => {
      // @ts-ignore
      event.stopPropagation();

      if (!(currentCard && currentColumn)) return;

      const toIndex = card ? column.items.indexOf(card) : column.items.length;
      const fromIndex = currentColumn.items.indexOf(currentCard);
      const isSameColumn = column.id === currentColumn.id;

      setBoardData((prevState) =>
        prevState.map((prevCol) => {
          if (isSameColumn && prevCol.id === currentColumn.id) {
            return moveCardInColumn(currentColumn, fromIndex, toIndex);
          }

          if (prevCol.id === currentColumn.id) {
            return removeCardFromColumn(currentColumn, fromIndex);
          }

          if (prevCol.id === column.id) {
            return addCardToColumn(column, toIndex, currentCard);
          }

          return prevCol;
        })
      );
      setCurrentCard(null);
      setCurrentColumn(null);
    },
    [currentCard, currentColumn]
  );

  const handleDragStart = useCallback((_: any, column: IBoardColumn, card: IBoardCard) => {
    setCurrentCard(card);
    setCurrentColumn(column);
  }, []);

  const handleDragOver = useCallback((event: DragEventHandler<HTMLElement>) => {
    // @ts-ignore
    event.preventDefault();
  }, []);

  return (
    <S.Container>
      <S.BoardHeader>
        {boardData.map(({ id, label, items }) => (
          <ColumnHeader key={id} label={label} count={items.length} />
        ))}
        <NewColumnHeader />
      </S.BoardHeader>
      <S.BoardBody>
        {boardData.map((column) => (
          <BoardColumn
            key={column.id}
            data={column}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
          />
        ))}
      </S.BoardBody>
    </S.Container>
  );
};

export { Board };
