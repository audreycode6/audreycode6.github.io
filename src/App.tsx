import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <>
      <h1>Audrey Theriault-Allaire</h1>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}

export default App;
