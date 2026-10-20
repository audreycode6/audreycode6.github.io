import '../styles/Nav.css';

export function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#journey">Journey</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
