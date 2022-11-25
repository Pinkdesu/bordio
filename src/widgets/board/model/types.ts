import { IBoardCard, Status } from 'entities/boardCard';

interface IBoardColumn {
  id: string;
  label: string;
  status: Status;
  items: IBoardCard[];
}

export type { IBoardColumn };
