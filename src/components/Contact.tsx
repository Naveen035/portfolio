import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoClose } from 'react-icons/io5';

// Define types for the form data
interface FormData {
  FullName: string;
  EmailAddress: string;
  Subject: string;
  message: string;
}

export default function Contact() {
  const [showModal, setShowModal] = useState(false); // State for showing the popup
  const [isLoading, setIsLoading] = useState(false); // Optional loading state

  const form = useRef<HTMLFormElement | null>(null); // Type ref properly

  // Email sending function
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          'service_pylifxr',
          'template_5anefqd',
          form.current,
          'Lc8R53umLPW77rsZw' // Use string directly for the public key
        )
        .then(
          () => {
            console.log('SUCCESS!');
            form.current?.reset(); // Reset form safely
            setIsLoading(false);
            setShowModal(true);
          },
          (error) => {
            console.error('FAILED...', error.text);
            setIsLoading(false); // Stop loading on error
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin border-blue-500"></div>
            <h2 className="font-bold text-white">Loading...</h2>
          </div>
        </div>
      )}

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
          <div className="bg-white px-4 text-center py-6 rounded-lg shadow-md relative w-[80%] md:w-[40%] lg:w-[25%]">
            <h2 className="text-base font-bold">Message Sent Successfully</h2>
            <p className="text-sm">
              Thanks for reaching out! I'll get back to you within the next 24 hours.{' '}
              <span className="text-green-600 font-bold text-xl">&#10003;</span>
            </p>
            <button
              className="bg-rose-500 absolute top-3 right-3 text-white hover:cursor-pointer hover:bg-lime-400 font-bold rounded-full inline-flex items-center text-sm"
              onClick={() => setShowModal(false)}
            >
              <IoClose className="text-lg" />
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
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
          {/* Contact Information */}
          <motion.div className="space-y-8">
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

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  name="FullName"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  name="EmailAddress"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                name="Subject"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
