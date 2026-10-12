import type { Project } from '../content/types';

type ProjectCardProps = { project: Project };

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <h3>{project.name}</h3>

      <p>{project.blurb}</p>

      <ul>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

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
