enum Status {
  New = 'new',
  Scheduled = 'Scheduled',
  InProgress = 'inProgress',
  Completed = 'completed',
}

type BoardCardStyle = {
  color: string;
  backgroundColor: string;
};

interface IBoardCard {
  id: number;
  date: string;
  style: BoardCardStyle;
  status: Status;
  description: string;
}

export { Status };
export type { BoardCardStyle, IBoardCard };
