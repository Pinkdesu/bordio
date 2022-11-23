import { ReactComponent as RoadmapSVG } from 'shared/assets/icons/roadmap.svg';
import { ReactComponent as ScheduleSVG } from 'shared/assets/icons/schedule.svg';
import { ReactComponent as TasksSVG } from 'shared/assets/icons/tasks.svg';
import { ReactComponent as NotesSVG } from 'shared/assets/icons/notes.svg';
import { ReactComponent as FilesSVG } from 'shared/assets/icons/files.svg';

import * as S from './styled';
import { NavItem } from './NavItem';

const Tools = () => (
  <S.Container>
    <S.Header>Tools</S.Header>
    <S.Navigation>
      <NavItem to="/roadmap" icon={<RoadmapSVG />} text="Roadmap" />
      <NavItem to="/" icon={<ScheduleSVG />} text="Schedule" />
      <NavItem to="/tasks" icon={<TasksSVG />} text="Tasks" />
      <NavItem to="/notes" icon={<NotesSVG />} text="Notes" />
      <NavItem to="/files" icon={<FilesSVG />} text="Files" />
    </S.Navigation>
  </S.Container>
);

export { Tools };
