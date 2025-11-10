import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/10 dark:border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} Flames.Dev — Full‑Stack & GenAI Developer</p>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Work</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
