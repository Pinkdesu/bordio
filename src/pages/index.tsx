import { Route, Routes } from 'react-router-dom';

import { Workspace } from './workspace';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Workspace />}>
      <Route path="roadmap" element={<span></span>} />
      <Route path="tasks" element={<span></span>} />
      <Route path="notes" element={<span></span>} />
      <Route path="files" element={<span></span>} />
    </Route>
  </Routes>
);

export { Routing };
