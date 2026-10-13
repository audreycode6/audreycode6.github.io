import { projects } from '../content/projects';
import { ProjectCard } from './ProjectCard';
import { TagFilter } from './TagFilter';
import { useState } from 'react';
import type { Tag } from '../content/types';

export function Projects() {
  const [selected, setSelected] = useState<Tag | null>(null);
  const visible = selected
    ? projects.filter((p) => p.tags.includes(selected))
    : projects;
  const shipped = visible.filter((p) => p.status === 'shipped');
  const inProgress = visible.filter((p) => p.status === 'in-progress');
  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();

  function handleSelect(tag: Tag | null) {
    setSelected(tag === selected ? null : tag);
  }

  return (
    <>
      <TagFilter tags={allTags} selected={selected} onSelect={handleSelect} />
      {shipped.length > 0 && (
        <div className="project-group">
          <h2>Shipped</h2>

          {shipped.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
      {inProgress.length > 0 && (
        <div className="project-group">
          <h2>In progress</h2>

          {inProgress.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
