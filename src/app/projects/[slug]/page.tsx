import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { getProjectById, projects } from "@/data/projects";
import { use } from "react"; 

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params); // Await the params
  // const [headerRef, headerInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });
  const project = getProjectById(resolvedParams.slug); // Use resolvedParams

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Github size={20} />
                View Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Image */}
        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden mb-8">
          {project.image && project.image.startsWith("/images") ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 text-lg">Project Screenshot</p>
            </div>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 p-8 bg-gray-50 rounded-xl">
            {project.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </p>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.longDescription}
          </p>
        </section>

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Challenges
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Solutions */}
        {project.solutions && project.solutions.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Solutions</h2>
            <ul className="space-y-3">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Outcomes & Impact
            </h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-purple-600 font-bold">→</span>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Architecture Diagram */}
        {project.architecture && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Architecture
            </h2>
            <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={project.architecture}
                alt="Architecture Diagram"
                fill
                className="object-contain"
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
