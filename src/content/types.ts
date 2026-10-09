export type Tag =
  | 'Python'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Flask'
  | 'Express'
  | 'PostgreSQL'
  | 'SQLite'
  | 'Docker'
  | 'WebSockets'
  | 'PyObjC'
  | 'HTML'
  | 'CSS'
  | 'Jinja'
  | 'AWS Lightsail'
  | 'pytest'
  | 'unittest'
  | 'Vitest'
  | 'Knex'
  | 'SQLAlchemy';

export type Project = {
  /**
   * A stable ID made for URLs. Must be unique.
   * The project name in lowercase, with hyphens instead of spaces.
   */
  slug: string;
  name: string;
  blurb: string;
  tags: Tag[];
  status: ProjectStatus;
  /**
   * Link to live project
   */
  liveUrl?: string;
  /**
   * Link to view project demo
   */
  demoUrl?: string;
  /**
   * Link to project repo
   */
  repoUrl?: string;
  /**
   * still image for the demo video
   */
  poster?: string;
};

export type ProjectStatus = 'shipped' | 'in-progress';

export type Milestone = {
  id: string;
  /**
   * The date when this milestone began
   */
  periodStart: Date;
  /**
   * The date when this milestone ended
   */
  periodEnd?: Date;
  title: string;
  body: string;
  artifacts?: Artifact[];
};

export type Artifact = {
  label: string;
  href: string;
};
