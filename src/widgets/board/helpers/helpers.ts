import { IBoardCard } from 'entities/boardCard';

import { IBoardColumn } from '../model';

const removeCardFromColumn = (column: IBoardColumn, fromIndex: number): IBoardColumn => {
  const newItems: IBoardCard[] = [...column.items];

  newItems.splice(fromIndex, 1);

  return {
    ...column,
    items: newItems,
  };
};

const addCardToColumn = (column: IBoardColumn, toIndex: number, card: IBoardCard): IBoardColumn => {
  const newItems: IBoardCard[] = [...column.items];

  newItems.splice(toIndex, 0, { ...card, status: column.status });

  return {
    ...column,
    items: newItems,
  };
};

const moveCardInColumn = (
  column: IBoardColumn,
  fromIndex: number,
  toIndex: number
): IBoardColumn => {
  const newItems: IBoardCard[] = [...column.items];

  newItems.splice(fromIndex, 1);
  newItems.splice(toIndex, 0, column.items[fromIndex]);

  return {
    ...column,
    items: newItems,
  };
};

export { removeCardFromColumn, addCardToColumn, moveCardInColumn };
