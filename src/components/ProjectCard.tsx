import type { Blurb, Project } from '../content/types';
import '../styles/ProjectCard.css';

const BLURB_LABELS: Record<keyof Blurb, string> = {
  what: 'What',
  why: 'Why',
  learning: 'Learning',
};

const BLURB_KEYS = Object.keys(BLURB_LABELS) as (keyof Blurb)[];

type ProjectCardProps = { project: Project };

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h4>{project.name}</h4>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <dl className="blurb">
        {BLURB_KEYS.map((key) =>
          project.blurb[key] ? (
            <div key={key}>
              <dt>{BLURB_LABELS[key]}</dt>
              <dd>{project.blurb[key]}</dd>
            </div>
          ) : null,
        )}
      </dl>
      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live site
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Visit the code
          </a>
        )}
      </div>
    </article>
  );
}
