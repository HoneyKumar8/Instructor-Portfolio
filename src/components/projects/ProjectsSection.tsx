import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Terminal, Cpu, Info } from 'lucide-react';
import { SectionTitle, Card, Badge, Button, Modal } from '../ui';
import { GithubIcon } from '../ui/Icons';
import projectsData from '../../data/projects.json';
import { type Project } from '../../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = projectsData as Project[];

  return (
    <section id="projects" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Engineering Credentials"
        title="Featured Software Projects"
        subtitle="Can your DSA instructor build real production software? Examine practical full-stack and AI architectures developed to reinforce industry teaching credibility."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex flex-col h-full"
          >
            <Card className="flex-1 flex flex-col justify-between p-6 sm:p-7 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/80 hover:border-indigo-500/50 transition-all">
              
              <div className="space-y-4">
                {/* Category & Featured Badge */}
                <div className="flex items-center justify-between">
                  <Badge variant="primary" size="sm">{project.category}</Badge>
                  <span className="text-xs font-bold font-code text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 font-body">
                    {project.subtitle}
                  </p>
                </div>

                {/* Problem Statement Preview */}
                <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-btn border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Problem Solved:
                  </p>
                  <p className="line-clamp-3 leading-relaxed">{project.problemStatement}</p>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Technologies & Architecture:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-700/60 mt-6 flex items-center justify-between gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 text-xs"
                >
                  View Full Architecture
                </Button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-btn bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                    title="View Source on GitHub"
                    aria-label={`View ${project.title} GitHub Source`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-btn bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-400 transition-colors border border-indigo-200 dark:border-indigo-800/80 min-h-[40px] min-w-[40px] flex items-center justify-center"
                      title="Launch Live Demo"
                      aria-label={`Launch ${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || 'Project Breakdown'}
        maxWidth="2xl"
      >
        {selectedProject && (
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <div>
              <Badge variant="primary" size="md" className="mb-2">{selectedProject.category}</Badge>
              <h4 className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {selectedProject.subtitle}
              </h4>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                Instructor Contribution: <span className="text-slate-800 dark:text-slate-200">{selectedProject.role}</span>
              </p>
            </div>

            {/* Problem & Solution Comparison Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50/60 dark:bg-amber-950/20 p-4 rounded-btn border border-amber-200 dark:border-amber-800/60 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <Info className="w-4 h-4" /> The Problem Statement
                </p>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {selectedProject.problemStatement}
                </p>
              </div>
              <div className="bg-emerald-50/60 dark:bg-emerald-950/20 p-4 rounded-btn border border-emerald-200 dark:border-emerald-800/60 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Engineered Solution
                </p>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Architectural Deep Dive */}
            {selectedProject.architecture && (
              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 font-heading">
                  <Cpu className="w-5 h-5 text-indigo-500" /> System Architecture & Execution
                </h5>
                <p className="text-sm bg-slate-50 dark:bg-slate-900/80 p-4 rounded-btn border border-slate-200 dark:border-slate-700 font-body leading-relaxed">
                  {selectedProject.architecture}
                </p>
              </div>
            )}

            {/* Key Educational & Engineering Learnings */}
            <div className="space-y-2.5">
              <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 font-heading">
                <Terminal className="w-5 h-5 text-emerald-500" /> Key Engineering Outcomes & Teaching Application
              </h5>
              <ul className="space-y-2 text-sm">
                {selectedProject.keyLearnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons inside modal */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-3 justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(selectedProject.githubUrl, '_blank', 'noopener,noreferrer')}
                icon={<GithubIcon className="w-4 h-4" />}
              >
                GitHub Repository
              </Button>
              {selectedProject.liveUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => window.open(selectedProject.liveUrl, '_blank', 'noopener,noreferrer')}
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Launch Live Web Demo
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
