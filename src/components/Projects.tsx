import { projects } from '../content/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const shipped = projects.filter((p) => p.status === 'shipped');
  const inProgress = projects.filter((p) => p.status === 'in-progress');

  return (
    <>
      <div className="project-group">
        <h2>Shipped</h2>

        {shipped.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="project-group">
        <h2>In progress</h2>

        {inProgress.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
