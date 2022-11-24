import { IBoardCard } from 'entities/boardCard';

interface IBoardColumn {
  id: string;
  label: string;
  items: IBoardCard[];
}

export type { IBoardColumn };
