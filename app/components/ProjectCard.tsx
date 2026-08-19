'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string;
  githubUrl: string;
  downloadUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  technologies,
  githubUrl,
  downloadUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-purple-500/30 card-gradient hover:border-purple-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = '/images/project-placeholder.jpg'; }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-purple-300 mb-2 text-lg">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          {description}
        </p>
        <p className="text-xs text-gray-400 mb-4">
          <span className="font-semibold text-gray-300">
            Technologies:
          </span>{" "}
          <span className="accent-gradient font-semibold">{technologies}</span>
        </p>
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            className="text-sm px-4 py-2 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105"
          >
            View Project
          </a>
          <a
            href={downloadUrl}
            target="_blank"
            className="text-sm px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            Download Code
          </a>
        </div>
      </div>
    </article>
  );
}
