import { about } from '../content/copy';
import '../styles/About.css';

export function About() {
  return (
    <>
      <h2>{about.heading}</h2>
      <div className="paragraphs">
        {about.paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>

      <a href="/AudreyTheriaultAllaireResume.pdf" download>
        Download resume (PDF)
      </a>
    </>
  );
}
