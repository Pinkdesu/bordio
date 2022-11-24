import { useState } from 'react';

import { IBoardColumn } from '../model';
import { BoardColumn } from './boardColumn';
import { NewColumnHeader } from './newColumnHeader';
import { ColumnHeader } from './columnHeader';
import * as S from './styled';

type Props = {
  data: IBoardColumn[];
};

const Board = ({ data }: Props) => {
  const [boardData, setBoardData] = useState<IBoardColumn[]>(data);

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
          <BoardColumn key={column.id} data={column} />
        ))}
      </S.BoardBody>
    </S.Container>
  );
};

export { Board };
