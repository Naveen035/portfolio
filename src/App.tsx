import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-white">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </motion.main>
        
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900 text-white py-8"
        >
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Naveen Kumar. All rights reserved.</p>
          </div>
        </motion.footer>
      </div>
    </AnimatePresence>
  );
}

export default App;