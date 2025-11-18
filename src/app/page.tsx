"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Database,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "5+", label: "Data Pipelines" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Committed" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable applications",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust ETL pipelines",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}>
                Hi, I&apos;m{" "}
                <span className="text-blue-600 inline-block">
                  <motion.span
                    initial={{ backgroundPosition: "0%" }}
                    animate={{ backgroundPosition: "100%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
                      backgroundSize: "200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                    Hezekiah
                  </motion.span>
                </span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}>
                Software Developer & Aspiring Data Engineer
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}>
                I build scalable applications and data pipelines. Currently
                mastering data engineering through DataLab while bringing
                software engineering best practices to data infrastructure.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/projects"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl">
                    View My Work <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex">
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}>
                {[
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
                    href: "mailto:https://withthedev@gmail.com",
                    label: "Email",
                  },
                ].map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors group"
                    aria-label={label}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}>
                    <Icon
                      size={24}
                      className="group-hover:text-blue-600 transition-colors"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative">
              <motion.div
                className="relative w-full h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                {/* Floating Elements */}
                <Image
                  src="/images/Black Pattern Minimalist LinkedIn Profile Picture.png"
                  alt="HezekiahEnahoro"
                  fill
                  quality={95}
                  className="object-cover"
                  priority
                />

                {/* Optional: Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Floating Elements (keep these for animation effect) */}
                <motion.div
                  className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-lg backdrop-blur-sm"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-sm"
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-10 w-12 h-12 bg-green-500/20 rounded-lg backdrop-blur-sm"
                  animate={{
                    x: [0, 15, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <highlight.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section
        ref={statsRef}
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-lg">
                <motion.h3
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}>
                  {stat.value}
                </motion.h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Check out some of my recent work
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}>
            {getFeaturedProjects().map((project, index) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                View All Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
