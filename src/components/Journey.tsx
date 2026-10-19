import { journey } from '../content/journey';
import { journeyCopy } from '../content/copy';
import { MilestoneCard } from './MilestoneCard';
import '../styles/Journey.css';

export function Journey() {
  return (
    <div className="journey">
      <h2>{journeyCopy.heading}</h2>
      <p className="intro">{journeyCopy.intro}</p>

      <ol className="milestone">
        {journey.map((milestone) => (
          <li key={milestone.id}>
            <MilestoneCard milestone={milestone} />
          </li>
        ))}
      </ol>
    </div>
  );
}
