import { Header } from 'widgets/header';
import { Board } from 'widgets/board';

import { BOARD_DATA } from '../model';

const Schedule = () => (
  <>
    <Header />
    <Board data={BOARD_DATA} />
  </>
);

export { Schedule };
