"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/HezekiahEnahoro",
      label: "GitHub",
    },
    {
      Icon: Linkedin,
      href: "https://linkedin.com/in/hezekiah-enahoro",
      label: "LinkedIn",
    },
    {
      Icon: Mail,
      href: "https://mailto:oriehezekiah@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-bold mb-4">
              Hezekiah Enahoro<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Software Developer & Data Engineer passionate about building
              scalable solutions and efficient data pipelines.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <p className="flex items-center justify-center gap-2">
            &copy; {currentYear} HezekiahE. Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}>
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.span>
            using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
