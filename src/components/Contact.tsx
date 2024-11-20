import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Define types for the form data
interface FormData {
  FullName: string;
  EmailAddress: string;
  Subject: string;
  message: string;
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsLoading(true);
    emailjs
      .sendForm('service_pylifxr', 'template_5anefqd', form.current, {
        publicKey: 'Lc8R53umLPW77rsZw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current?.reset();
          setIsLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {[
              { Icon: Mail, text: 'massnaveen1002@gmail.com', href: 'mailto:massnaveen1002@gmail.com' },
              { Icon: Phone, text: '+91 6301768850', href: 'tel:+91 6301768850' },
              { Icon: MapPin, text: 'India Andhra Pradesh', href: '#' },
            ].map(({ Icon, text, href }) => (
              <motion.a
                key={text}
                href={href}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Icon size={24} />
                </div>
                <span>{text}</span>
              </motion.a>
            ))}
          </motion.div>

          {isLoading && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin border-blue-500"></div>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail}>
            <motion.form
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    name="FullName"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    name="EmailAddress"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  name="Subject"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                <button type="submit">Send Message</button>
              </motion.button>
            </motion.form>
          </form>
        </div>
      </div>
    </section>
  );
}
