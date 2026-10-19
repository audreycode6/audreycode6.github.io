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
      <div className="paragraphs">
        <h3>Fun Facts</h3>
        <ul className="fun-facts">
          {about.funFacts.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>

      <a href="/AudreyTheriaultAllaireResume.pdf" download>
        Download resume (PDF)
      </a>
      <a
        href="https://www.linkedin.com/in/audrey-theriault-allaire/"
        target="_blank"
        rel="noreferrer"
      >
        Let's Connect!
      </a>
    </>
  );
}
