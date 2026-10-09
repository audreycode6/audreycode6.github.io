import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'sub-planner',
    name: 'Sub Planner',
    blurb:
      'A web app where a teacher builds a substitute plan once, saves it, and duplicates it the next time they are out.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Knex', 'Vitest'],
    status: 'in-progress',
    // TODO: repoUrl, demoUrl, poster
  },
  {
    slug: 'budget-thing',
    name: 'Budget Thing',
    blurb:
      'Budgeting App: Plan monthly or annual budgets against gross income, with expenses grouped into bills, savings, and debt; a session-authenticated JSON API serves a vanilla JavaScript frontend.',
    tags: [
      'Python',
      'Flask',
      'PostgreSQL',
      'SQLAlchemy',
      'JavaScript',
      'Docker',
      'AWS Lightsail',
      'unittest',
    ],
    status: 'shipped',
    liveUrl: 'https://budget-thing.site/',
    repoUrl: 'https://github.com/audreycode6/budget_app',
    // TODO: demoUrl, poster
  },
  {
    slug: 'verbal-habits',
    name: 'Verbal Habits',
    blurb:
      'macOS Menu Bar App: Transcribe speech on-device and keep a live count of every word on a tracked list, ending each session with per-word counts and their percentage of total words spoken.',
    tags: ['Python', 'PyObjC', 'pytest'],
    status: 'shipped',
    repoUrl: 'https://github.com/audreycode6/verbal-habits',
    // TODO: demoUrl, poster
  },
  {
    slug: 'mood-map',
    name: 'Mood Map',
    blurb:
      'Launch School Project: timed custom coding project + present to live audience. Mood-Tracking App: Record daily emotional check-ins covering mood, energy level, emotions, and a written reflection, with all SQL kept in one data access layer as parameterized queries.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'HTML', 'CSS', 'Jinja'],
    status: 'shipped',
    repoUrl: 'https://github.com/audreycode6/mood-map',
    // TODO: demoUrl, poster
  },
  {
    slug: 'chat-app',
    name: 'Chat App',
    blurb:
      'A simple real-time group chat that runs in the browser. Users create a username and can send messages that show up instantly for everyone connected. Announces when users join or leave and shows a live count of how many users are online.',
    tags: ['Python', 'JavaScript', 'WebSockets', 'HTML', 'CSS'],
    status: 'shipped',
    repoUrl: 'https://github.com/audreycode6/WebsocketsChatApp',
    // TODO: demoUrl, poster
  },
  {
    slug: 're-think-it',
    name: 'Re-Think It',
    blurb:
      'CS50 Final Project: My first application! Educate users about cognitive distortions. Users fill out a multi-step form that guides them to identify: a negative thought, the reasoning behind it, feelings that came up, the cognitive distortion it maps to, and finishes with reframing the negative thought into a positive statment.',
    tags: ['Python', 'JavaScript', 'Flask', 'Jinja', 'HTML', 'CSS', 'SQLite'],
    status: 'shipped',
    demoUrl: 'https://youtu.be/DEkpqESdy0U',
    // TODO poster
  },
];
