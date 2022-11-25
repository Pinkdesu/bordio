import { memo, DragEventHandler } from 'react';

import { IBoardCard, Status } from '../model';
import * as S from './styled';

type Props = {
  data: IBoardCard;
  draggable?: boolean;
  onDrop?: (event: DragEventHandler<HTMLElement>, card?: IBoardCard) => void;
  onDragStart?: (event: DragEventHandler<HTMLElement>, card: IBoardCard) => void;
  onDragOver?: (event: DragEventHandler<HTMLElement>) => void;
};

const BoardCard = memo((props: Props) => {
  const { data, draggable = false, onDrop, onDragOver, onDragStart } = props;

  const { date, style, status, description } = data;

  const handleDrop = (event: DragEventHandler<HTMLElement>) => {
    if (onDrop) {
      onDrop(event, data);
    }
  };

  const handleDragStart = (event: DragEventHandler<HTMLElement>) => {
    if (onDragStart) {
      onDragStart(event, data);
    }
  };

  const isCompleted = status === Status.Completed;

  return (
    /* @ts-ignore */
    <S.Container
      draggable={draggable}
      cardStyle={style}
      isCompleted={isCompleted}
      onDrop={handleDrop}
      onDragOver={onDragOver}
      onDragStart={handleDragStart}
    >
      <S.Description isCompleted={isCompleted}>{description}</S.Description>
      <S.Time cardStyle={style} isCompleted={isCompleted}>
        {date}h
      </S.Time>
    </S.Container>
  );
});

export { BoardCard };
