import { About } from './components/About';
import { Contact } from './components/Contact';
import { Journey } from './components/Journey';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';

function App() {
  return (
    <>
      <Nav />
      <h1>Audrey Theriault-Allaire</h1>

      <section id="about" className="section">
        <div className="section-inner">
          <About />
        </div>
      </section>

      <section id="journey" className="section">
        <div className="section-inner">
          <Journey />
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-inner">
          <Projects />
        </div>
      </section>
      <section id="contact" className="section">
        <div className="section-inner">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default App;
