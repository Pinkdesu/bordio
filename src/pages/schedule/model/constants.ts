import { IBoardColumn } from 'widgets/board/model/types';
import { Status, BoardCardStyle } from 'entities/boardCard';

const STYLE_1: BoardCardStyle = {
  color: '#435E52',
  backgroundColor: '#ABE9CE',
};

const STYLE_2: BoardCardStyle = {
  color: '#404784',
  backgroundColor: '#D8DCFF',
};

const STYLE_3: BoardCardStyle = {
  color: '#662E1E',
  backgroundColor: ' #FFDFBA',
};

const STYLE_4: BoardCardStyle = {
  color: '#662E1E',
  backgroundColor: '#FEC6B7',
};

const STYLE_5: BoardCardStyle = {
  color: '#4A4D3A',
  backgroundColor: '#D9E6A2',
};

const STYLE_6: BoardCardStyle = {
  color: '#8E4778',
  backgroundColor: '#F2BAE1',
};

const BOARD_DATA: IBoardColumn[] = [
  {
    id: 'new-task',
    label: 'New task',
    status: Status.New,
    items: [
      {
        id: 1,
        date: '0:20',
        description: 'Check email',
        style: STYLE_1,
        status: Status.New,
      },
      {
        id: 2,
        date: '3:00',
        description: 'Compare PPC agencies and make a report for Steven',
        style: STYLE_2,
        status: Status.New,
      },
      {
        id: 3,
        date: '0:30',
        description: 'Meeting with Amanda (PR department)',
        style: STYLE_1,
        status: Status.New,
      },
      {
        id: 4,
        date: '0:20',
        description: "Get Patrick's approval for homepage new design",
        style: STYLE_2,
        status: Status.New,
      },
    ],
  },
  {
    id: 'scheduled',
    label: 'Scheduled',
    status: Status.Scheduled,
    items: [
      {
        id: 5,
        date: '0:20',
        description: 'Check email',
        style: STYLE_3,
        status: Status.Scheduled,
      },
      {
        id: 6,
        date: '5:00',
        description: 'Write a blogpost "7 best strategies for SEO in 2020"',
        style: STYLE_4,
        status: Status.Scheduled,
      },
      {
        id: 7,
        date: '2:00',
        description: 'New Ad copies for Manamaja',
        style: STYLE_5,
        status: Status.Scheduled,
      },
    ],
  },
  {
    id: 'in-progress',
    label: 'In progress',
    status: Status.InProgress,
    items: [
      {
        id: 8,
        date: '0:20',
        description: 'Check email',
        style: STYLE_3,
        status: Status.InProgress,
      },
      {
        id: 9,
        date: '0:20',
        description: "Record a video comment about last week's analytics report",
        style: STYLE_6,
        status: Status.InProgress,
      },
      {
        id: 10,
        date: '1:00',
        description: 'Process all resumes for Content Marketer position',
        style: STYLE_1,
        status: Status.InProgress,
      },
    ],
  },
  {
    id: 'completed',
    label: 'Completed',
    status: Status.Completed,
    items: [
      {
        id: 11,
        date: '0:20',
        description: 'Check email',
        style: STYLE_3,
        status: Status.Completed,
      },
      {
        id: 12,
        date: '0:45',
        description: 'Weekly planning session',
        style: STYLE_6,
        status: Status.Completed,
      },
      {
        id: 13,
        date: '2:30',
        description: 'Create 5+ target audiences in Facebook for Samsung ...',
        style: STYLE_1,
        status: Status.Completed,
      },
      {
        id: 14,
        date: '0:20',
        description: 'Check FB Banner Design and give feedback',
        style: STYLE_2,
        status: Status.Completed,
      },
      {
        id: 15,
        date: '0:20',
        description: 'Check email',
        style: STYLE_5,
        status: Status.Completed,
      },
    ],
  },
];

export { BOARD_DATA };
