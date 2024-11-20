import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, BrainCircuit } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        

        <div className="flex gap-4">
          {[
            { Icon: Github, href: "https://github.com/Naveen035" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/naveen-kumar1002/" },
            { Icon: Mail, href: "mailto:massnaveen1002@gmail.com" }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
        <nav className="flex gap-6">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" }
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}