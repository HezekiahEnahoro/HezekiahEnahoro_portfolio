"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Zap,
  Package,
  Server,
  Workflow,
} from "lucide-react";

export default function SkillsPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [toolsRef, toolsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 70 },
      ],
    },
    {
      icon: Server,
      title: "Frameworks & Libraries",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "Node.js/Express", level: 80 },
        { name: "FastAPI/Django", level: 75 },
        { name: "TailwindCSS", level: 90 },
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Apache Spark", level: 80 },
        { name: "Apache Kafka", level: 75 },
        { name: "Airflow", level: 85 },
        { name: "dbt", level: 80 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 65 },
        { name: "CI/CD", level: 80 },
      ],
    },
    {
      icon: Package,
      title: "Databases",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Snowflake", level: 70 },
      ],
    },
    {
      icon: GitBranch,
      title: "Tools & Practices",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "REST APIs", level: 85 },
        { name: "Testing (Jest/Pytest)", level: 80 },
        { name: "Agile/Scrum", level: 85 },
      ],
    },
  ];

  const tools = [
    { name: "VS Code", logo: "💻" },
    { name: "Docker", logo: "🐳" },
    { name: "Git", logo: "📦" },
    { name: "Postman", logo: "📮" },
    { name: "Jupyter", logo: "📓" },
    { name: "Figma", logo: "🎨" },
    { name: "Slack", logo: "💬" },
    { name: "Jira", logo: "📋" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            Skills & Technologies
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            My technical toolkit for building modern applications and data
            infrastructure
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <category.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={
                          skillsInView ? { width: `${skill.level}%` } : {}
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <section ref={toolsRef}>
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={toolsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            Tools I Use Daily
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={toolsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white px-6 py-4 rounded-xl shadow-lg text-center min-w-[120px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={toolsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}>
                <div className="text-4xl mb-2">{tool.logo}</div>
                <p className="text-sm font-medium text-gray-700">{tool.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Learning Journey */}
        <motion.section
          className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={toolsInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block text-6xl mb-6">
              🚀
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Technology evolves rapidly, and so do I. I&apos;m constantly
              exploring new tools, frameworks, and best practices to stay at the
              forefront of software development and data engineering. Currently
              deepening my expertise in real-time data processing and
              cloud-native architectures.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Machine Learning", "Kubernetes", "Terraform", "GraphQL"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={toolsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#3B82F6",
                      color: "#fff",
                    }}>
                    📚 Learning {tech}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
