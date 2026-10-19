import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'sub-planner',
    name: 'Sub Planner',
    blurb: {
      what: 'A web app where teachers can create, save, and duplicates lesson plans. Create classroom profiles that hold core info any sub needs. Consistent and simple design with lesson plans structured into learning blocks with times and annotations.',
      why: 'Practice using React and Typescript. Address problem area from teaching: substitute lesson plans.',
    },
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Knex', 'Vitest'],
    status: 'in-progress',
    // TODO: repoUrl, demoUrl, poster
  },
  {
    slug: 'budget-thing',
    name: 'Budget Thing - Budgeting App',
    blurb: {
      what: 'Plan monthly or annual budgets against gross income, with expenses grouped into bills, savings, and debt.',
      why: 'Tool for friend who found spreadsheets and other finance apps too complicated.',
      learning:
        'Planning project set up from empty repo to separating functionality, to packed app and readme. How to make local app to make a live site (AWS ec2, name domain, db migrations, update with docker and moved to AWS Lightsail).',
    },
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
    name: 'Verbal Habits - macOS Menu Bar App',
    blurb: {
      what: 'Transcribe speech on-device and keep a live count of every word on a tracked list, ending each session with per-word counts and their percentage of total words spoken.',
      why: 'Address feedback in interview assessment: using filler words – set out to create a application that takes in audio and keeps track of filler words used.',
      learning:
        'New tools: apple frameworks (Speech, AVFoundation, AppKit), application/ui: menubar, working with audio as data, and PyObjC apple/python bridge. Planning workflow: Writing up a technical design documen mapping out v1 function and non functional requirements, highlevel description of system and its components, map the workflow, run spikes to answer questions about how tech works before writing source code. Practice git workflow: separating work into steps to have clear history. Upgrade from using unittest to pytest',
    },
    tags: ['Python', 'PyObjC', 'pytest'],
    status: 'shipped',
    repoUrl: 'https://github.com/audreycode6/verbal-habits',
    // TODO: demoUrl, poster
  },
  {
    slug: 'mood-map',
    name: 'Mood Map - Mood-Tracking App',
    blurb: {
      what: 'Record daily emotional check-ins covering mood, energy level, emotions, and a written reflection.',
      why: 'Launch School Assessment to create a custom coding application on a deadline and present to live audience. Practice building a schema for a product/ connecting an app to a db: having 1 to many relationship, using constraints (unique, foreign key, cascade delete): entries table for storing entry info: connected to user_id – users id fk, user can have many entries . emotions have a 1 to many relationship with entries. an entry can have many emotions but each emotion can only have 1 entry – fk to entries id.',
      learning:
        'Practice packaging an app + writing detailed read me’s. Splitting the UI by context – emotions input within an entry dealt with problem of not being able to nest forms, and 1 form depending on the other existing (entry can have emotions/ emotions need an entry) but wanting clean experience of user creating entry and attaching emotions at same time -> fix was to have 1 form to create entry but entry gets processed 1st and at success it will validate and insert emotions to db ',
    },
    tags: ['Python', 'Flask', 'PostgreSQL', 'HTML', 'CSS', 'Jinja'],
    status: 'shipped',
    repoUrl: 'https://github.com/audreycode6/mood-map',
    // TODO: demoUrl, poster
  },
  {
    slug: 'chat-app',
    name: 'Chat App',
    blurb: {
      what: 'A simple real-time group chat that runs in the browser. Users create a username and can send messages that show up instantly for everyone connected. Announces when users join or leave and shows a live count of how many users are online.',
      why: 'Learn by building and explore multiple users interacting in real time!',
      learning:
        'First time using WebSockets API, allowing persistent communication between users. Practice building full stack app from concept to app running locally',
    },
    tags: ['Python', 'JavaScript', 'WebSockets', 'HTML', 'CSS'],
    status: 'shipped',
    repoUrl: 'https://github.com/audreycode6/WebsocketsChatApp',
    // TODO: demoUrl, poster
  },
  {
    slug: 're-think-it',
    name: 'Re-Think It - CS50 Final Project',
    blurb: {
      what: 'My first application and now a relic of the start of my programming! Educate users about cognitive distortions. Users fill out a multi-step form that guides them to identify: a negative thought, the reasoning behind it, feelings that came up, the cognitive distortion it maps to, and finishes with reframing the negative thought into a positive statment.',
      why: 'Put to practice skills learned from CS50 course: ',
      learning:
        'How to create an application from scratch using python, flask, javascript, html, css, bootstrap ',
    },
    tags: ['Python', 'JavaScript', 'Flask', 'Jinja', 'HTML', 'CSS', 'SQLite'],
    status: 'shipped',
    demoUrl: 'https://youtu.be/DEkpqESdy0U',
    // TODO poster
  },
];
