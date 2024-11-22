import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Social Links */}
        <div className="flex gap-4">
          {[
            { Icon: Github, href: "https://github.com/Naveen035" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/naveen-kumar1002/" },
            { Icon: Mail, href: "mailto:massnaveen1002@gmail.com" },
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
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

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-600 hover:text-indigo-600"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col items-center gap-6 py-4">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
