import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, CheckCircle2, Sparkles, UserCheck } from 'lucide-react';
import { SectionTitle, Card, Badge } from '../ui';
import experienceData from '../../data/experience.json';
import { type ExperienceItem } from '../../types';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'faculty' | 'industry'>('all');
  const experiences: ExperienceItem[] = experienceData as ExperienceItem[];

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'faculty') return exp.type === 'Current Faculty Role';
    if (filter === 'industry') return exp.type === 'Industry Experience' || exp.type === 'Internship';
    return true;
  });

  return (
    <section id="experience" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Mentoring Credibility"
        title="Teaching & Professional Journey"
        subtitle="Replacing traditional corporate work history with an emphasized focus on mentoring impact, problem-solving workshops, and student doubt resolution."
      />

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
              filter === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            All Roles ({experiences.length})
          </button>
          <button
            onClick={() => setFilter('faculty')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
              filter === 'faculty'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600'
            }`}
          >
            Faculty & Teaching ({experiences.filter(e => e.type === 'Current Faculty Role').length})
          </button>
          <button
            onClick={() => setFilter('industry')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
              filter === 'industry'
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-300 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600'
            }`}
          >
            Industry Supporting Experience ({experiences.filter(e => e.type !== 'Current Faculty Role').length})
          </button>
        </div>
      </div>

      {/* Animated Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 md:pl-0">
        
        {/* Vertical Border Line */}
        <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 md:-translate-x-1/2" />

        <div className="space-y-10 sm:space-y-14">
          {filteredExperiences.map((item, idx) => {
            const isFaculty = item.type === 'Current Faculty Role';
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  !isLeft ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Center Icon Node */}
                <div className={`absolute left-0 md:left-1/2 -translate-x-[20px] md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md border-4 border-white dark:border-slate-900 z-20 ${
                  isFaculty ? 'bg-indigo-600 text-white animate-pulse-slow' : 'bg-slate-700 text-slate-200 dark:bg-slate-800'
                }`}>
                  {isFaculty ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-4 h-4" />}
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-10' : 'md:pl-10'} pl-8 md:pl-0`}>
                  <Card className={`p-6 sm:p-7 space-y-4 border transition-all ${
                    isFaculty
                      ? 'bg-gradient-to-br from-indigo-50/80 via-white to-white dark:from-indigo-950/40 dark:via-slate-800 dark:to-slate-800 border-indigo-200 dark:border-indigo-800/80 shadow-lg'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                  }`}>
                    
                    {/* Header Banner */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <Badge variant={isFaculty ? 'primary' : 'muted'} size="sm" icon={isFaculty ? <Sparkles className="w-3.5 h-3.5" /> : undefined}>
                        {item.type}
                      </Badge>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 font-code">
                        <Calendar className="w-3.5 h-3.5" /> {item.period}
                      </span>
                    </div>

                    {/* Role & Organization */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white">
                        {item.role}
                      </h4>
                      <p className="text-sm font-semibold text-primary dark:text-primary-light flex items-center gap-1.5 mt-0.5">
                        <UserCheck className="w-4 h-4 text-indigo-500" /> {item.company} &bull; <span className="text-slate-500 font-normal text-xs">{item.location}</span>
                      </p>
                    </div>

                    {/* Responsibilities list */}
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 font-body">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${isFaculty ? 'text-emerald-500' : 'text-slate-400'}`} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
