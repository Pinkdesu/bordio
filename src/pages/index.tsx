import { Route, Routes } from 'react-router-dom';

import { Workspace } from './workspace';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Workspace />} />
  </Routes>
);

export { Routing };
