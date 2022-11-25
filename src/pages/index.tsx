import { Route, Routes, Navigate } from 'react-router-dom';

import { Workspace } from './workspace';
import { Schedule } from './schedule';

const Routing = () => (
  <Routes>
    <Route path="/workspace" element={<Workspace />}>
      <Route index element={<Schedule />} />
      <Route path="roadmap" element={null} />
      <Route path="tasks" element={null} />
      <Route path="notes" element={null} />
      <Route path="files" element={null} />
    </Route>

    <Route path="/" element={<Navigate to="/workspace" />} />
  </Routes>
);

export { Routing };
