import type { Milestone, YearMonth } from '../content/types';

function formatYearMonth({ year, month }: YearMonth): string {
  if (month === undefined) return String(year);
  return new Date(year, month - 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

function formatPeriod(start: YearMonth, end?: YearMonth): string {
  return `${formatYearMonth(start)} - ${end ? formatYearMonth(end) : 'present'}`;
}

type MilestoneCardProps = { milestone: Milestone };

export function MilestoneCard({ milestone }: MilestoneCardProps) {
  return (
    <article className="milestone-card">
      <h3>{milestone.title}</h3>

      <time>{formatPeriod(milestone.periodStart, milestone.periodEnd)}</time>

      <p>{milestone.body}</p>

      {milestone.artifacts && (
        <ul className="artifact">
          {milestone.artifacts?.map((artifact) => (
            <li key={artifact.href}>
              <a href={artifact.href} target="_blank" rel="noopener noreferrer">
                {artifact.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
