import React from 'react';
import { motion } from 'framer-motion';
import { Map, Award, Sparkles, BookOpen } from 'lucide-react';
import { SectionTitle, Card, Badge } from '../ui';
import methodologyData from '../../data/methodology.json';
import { type RoadmapItem } from '../../types';

export const LearningRoadmapSection: React.FC = () => {
  const roadmapSteps: RoadmapItem[] = methodologyData.roadmapSteps as RoadmapItem[];

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'accent'; // emerald
      case 'Intermediate': return 'secondary'; // blue
      case 'Advanced': return 'primary'; // indigo
      case 'Interview': return 'warning'; // amber
      default: return 'muted';
    }
  };

  return (
    <section id="roadmap" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Structured Guidance"
        title="Student Learning Roadmap"
        subtitle="Follow our recommended step-by-step learning progression from basic programming syntax all the way to cracking advanced technical coding interviews."
      />

      {/* Roadmap Overview Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-card p-6 sm:p-8 text-white mb-16 shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-6 opacity-10">
          <Map className="w-72 h-72" />
        </div>
        <div className="max-w-3xl relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Proven Progression
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            From Confusion to Confidence in 8 Comprehensive Phases
          </h3>
          <p className="text-indigo-100 text-sm sm:text-base font-body">
            Each phase builds upon the last. You never jump into dynamic programming or graphs without first solidifying pointer mechanics, recursion logic, and memory efficiency.
          </p>
        </div>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 md:pl-0">
        
        {/* Central Vertical Line (visible on larger screens down the middle, or left-aligned on mobile) */}
        <div className="absolute left-6 sm:left-10 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-blue-500 to-emerald-500 md:-translate-x-1/2 rounded-full opacity-60 dark:opacity-40" />

        <div className="space-y-12 sm:space-y-16">
          {roadmapSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Center Node Button/Icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[22px] md:-translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-4 border-indigo-500 shadow-md flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                  <span className="text-xs font-extrabold font-code text-indigo-600 dark:text-indigo-400">
                    {idx + 1}
                  </span>
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} pl-8 md:pl-0`}>
                  <Card className="p-6 space-y-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/90 shadow-soft hover:border-indigo-500/50 transition-all">
                    
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-code">
                        Phase {idx + 1}
                      </span>
                      <Badge variant={getDifficultyVariant(step.difficulty)} size="sm">
                        {step.difficulty} Level
                      </Badge>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                      {step.description}
                    </p>

                    {/* Key concepts chips */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-indigo-500" /> Key Learning Targets:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {step.keyConcepts.map((concept, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>

                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Destination Interview Badge at bottom */}
        <div className="pt-12 flex flex-col items-center text-center relative z-20">
          <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg mb-3 border-4 border-white dark:border-slate-800 animate-bounce">
            <Award className="w-7 h-7" />
          </div>
          <h4 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
            Interview-Ready Problem Solver
          </h4>
          <p className="text-sm text-slate-500 max-w-sm font-body mt-1">
            Equipped to crack technical interviews and contribute immediately to engineering teams.
          </p>
        </div>

      </div>
    </section>
  );
};
