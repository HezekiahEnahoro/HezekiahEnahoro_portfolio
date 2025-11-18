"use client";

import Image from "next/image";
import { Download, BookOpen, Code, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [interestsRef, interestsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Software Developer",
      company: "Jam-Forte Technologies",
      period: "2022 - 2023",
      description:
        "Building scalable web applications and APIs using modern frameworks. Focus on clean architecture and best practices.",
      achievements: [
        "Developed 15+ production applications",
        "Improved application performance by 60%",
        "Led migration to microservices architecture",
      ],
    },
    {
      title: "Data Engineering Student",
      company: "DataLab Bootcamp",
      period: "2024 - Present",
      description:
        "Intensive data engineering program covering ETL pipelines, data warehousing, and big data technologies.",
      achievements: [
        "Built real-time data pipelines processing 100K+ records/min",
        "Designed cloud data warehouse with Snowflake",
        "Implemented ML model deployment pipeline",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Physics",
      institution: "Federal University Of Pertroleum Resources Effurun",
      period: "2015 - 2019",
      focus: "Physics, Mathematics, Computer Programming",
    },
    {
      degree: "Data Engineering Bootcamp",
      institution: "DataLab",
      period: "2024",
      focus: "ETL, Data Warehousing, Apache Spark, Airflow",
    },
  ];

  const interests = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Passionate about writing maintainable, testable code",
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "Designing scalable data systems and pipelines",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}>
              About Me
            </motion.h1>

            {[
              "I'm a Software Developer with a passion for building robust applications and efficient data systems. Currently expanding my expertise into Data Engineering through DataLab's intensive bootcamp.",
              "My unique combination of software engineering fundamentals and data engineering skills allows me to build end-to-end solutions—from application development to data pipeline architecture and analytics infrastructure.",
              "I believe in writing clean, maintainable code, embracing best practices, and continuously learning to stay ahead in this ever-evolving tech landscape.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}>
                {paragraph}
              </motion.p>
            ))}

            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <motion.div
              className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              {/* Your Professional Photo */}
              <Image
                src="/images/Black Pattern Minimalist LinkedIn Profile Picture.png"
                alt="HezekiahEnahoro- Software Developer & Data Engineer"
                fill
                className="object-cover"
                priority
              />

              {/* Optional: Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />

              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/20 rounded-lg backdrop-blur-sm"
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* What I'm Passionate About */}
        <section ref={interestsRef} className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={interestsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            What I&apos;m Passionate About
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={interestsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}>
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <interest.icon className="text-blue-600" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section ref={experienceRef} className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            Experience
          </motion.h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
                initial={{ opacity: 0, x: -40 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10 }}>
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <motion.span
                    className="text-gray-500 font-medium"
                    initial={{ opacity: 0 }}
                    animate={experienceInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}>
                    {exp.period}
                  </motion.span>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + idx * 0.1,
                      }}>
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section ref={educationRef} className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={educationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-500 mb-3">{edu.period}</p>
                <p className="text-gray-700">
                  <span className="font-semibold">Focus:</span> {edu.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <motion.section
          className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={educationInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Software Development",
                description:
                  "Full-stack development, RESTful APIs, microservices architecture, clean code principles, testing, CI/CD, version control",
              },
              {
                title: "Data Engineering",
                description:
                  "ETL pipelines, data warehousing, Apache Spark, Airflow, real-time streaming, data modeling, SQL optimization, cloud platforms",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                animate={educationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-700">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
