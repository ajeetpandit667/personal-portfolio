import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Qualification from './sections/Qualification';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  // Update page title
  useEffect(() => {
    document.title = "Ajeet Mishra | Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Qualification />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;