import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      
      <main className="bg-body transition-colors duration-400">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Nav /> {/* Floating navigation bar */}
      <Footer />
    </>
  );
}

export default App;