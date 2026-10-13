import { about } from '../content/copy';

export function About() {
  return (
    <>
      <h2>{about.heading}</h2>
      {about.paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </>
  );
}
