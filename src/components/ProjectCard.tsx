"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from 'react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  const categoryColors = {
    software: "bg-green-100 text-green-800",
    "data-engineering": "bg-blue-100 text-blue-800",
    fullstack: "bg-purple-100 text-purple-800",
  };

  const categoryIcons = {
    software: "💻",
    "data-engineering": "📊",
    fullstack: "🌐",
  };
  const isExternalImage = project.image.startsWith("http");

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        {!imageError && project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            unoptimized={isExternalImage}
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback when image fails
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-2">
                {categoryIcons[
                  project.category as keyof typeof categoryIcons
                ] || "🚀"}
              </div>
              <p className="text-sm font-medium px-4">{project.title}</p>
            </div>
          </div>
        )}

        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4">
          <div className="flex gap-3">
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="View on GitHub"
                onClick={(e) => e.stopPropagation()}>
                <Github size={18} />
              </motion.a>
            )}
            {project.demoUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="View Demo"
                onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              categoryColors[project.category as keyof typeof categoryColors]
            }`}>
            {project.category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}>
          {project.title}
        </motion.h3>

        <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default">
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* View Details Link */}
        <Link
          href={`/projects/${project.id}`}
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group/link">
          View Details
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}>
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}
