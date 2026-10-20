import { about } from '../content/copy';
import '../styles/About.css';

export function About() {
  return (
    <div className="about-section">
      <h2>{about.heading}</h2>
      <div className="paragraphs">
        {about.paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
      <div className="paragraphs">
        <h3>Fun Facts</h3>
        <ul className="fun-facts">
          {about.funFacts.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
