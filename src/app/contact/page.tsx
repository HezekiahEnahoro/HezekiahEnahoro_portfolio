'use client'

import ContactForm from '@/components/ContactForm'
import { Mail, MapPin, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ContactPage() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "withthedev@gmail.com",
      href: "mailto:withthedev@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com",
      href: "https://linkedin.com/in/hezekiah-enahoro",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com",
      href: "https://github.com/HezekiahEnahoro",
    },
  ];

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I specialize in full-stack web development, data pipeline engineering, API development, and data warehouse design. I can help with both new projects and improving existing systems.'
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. After our initial discussion, I'll provide a detailed timeline and milestones for your project."
    },
    {
      question: 'Do you work with startups?',
      answer: 'Absolutely! I love working with startups and early-stage companies. I understand the need for rapid development and scalable solutions.'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Yes! I can help optimize existing codebases, migrate legacy systems, improve data pipelines, or add new features to your applications.'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -40 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="bg-white p-3 rounded-lg shadow-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="text-blue-600" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                      {info.href ? (
                        
                          <a href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability */}
              <motion.div 
                className="mt-8 pt-8 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">Availability</h3>
                <p className="text-gray-600 text-sm">
                  Currently open to freelance projects and full-time opportunities 
                  in software development and data engineering.
                </p>
              </motion.div>

              {/* Response Time */}
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600 text-sm">
                  I typically respond within 24-48 hours on weekdays.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <section ref={faqRef} className="mt-20">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}