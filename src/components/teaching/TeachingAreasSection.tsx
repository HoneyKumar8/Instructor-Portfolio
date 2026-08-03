import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layers, GitCommit, Layers3, Network, Share2, Brain, Clock, Award, Wrench, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionTitle, Card, Badge } from '../ui';
import skillsData from '../../data/skills.json';
import methodologyData from '../../data/methodology.json';
import { type TeachingTopic } from '../../types';

export const TeachingAreasSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'primary' | 'secondary'>('all');
  const topics: TeachingTopic[] = skillsData.topics as TeachingTopic[];

  const filteredTopics = topics.filter(t => {
    if (activeTab === 'primary') return t.category === 'Primary';
    if (activeTab === 'secondary') return t.category === 'Secondary';
    return true;
  });

  const getTopicIcon = (name?: string) => {
    switch (name) {
      case 'Code': return <Code className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case 'GitCommit': return <GitCommit className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case 'Layers3': return <Layers3 className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
      case 'Network': return <Network className="w-5 h-5 text-pink-500 dark:text-pink-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />;
      case 'Clock': return <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <Wrench className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="teaching" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Curriculum & Pedagogy"
        title="What You Will Learn"
        subtitle="Instead of generic skill lists, examine the core algorithmic topics and step-by-step teaching methodology covered in our mentoring sessions."
      />

      {/* Category Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full bg-slate-100 dark:bg-slate-800 p-1.5 border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Subjects ({topics.length})
          </button>
          <button
            onClick={() => setActiveTab('primary')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
              activeTab === 'primary'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300'
            }`}
          >
            Core DSA & C++ ({topics.filter(t => t.category === 'Primary').length})
          </button>
          <button
            onClick={() => setActiveTab('secondary')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
              activeTab === 'secondary'
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-300 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300'
            }`}
          >
            Interview & Complexity ({topics.filter(t => t.category === 'Secondary').length})
          </button>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="flex flex-col h-full"
          >
            <Card className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700/80">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-btn bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center">
                    {getTopicIcon(topic.iconName)}
                  </div>
                  <Badge
                    variant={topic.category === 'Primary' ? 'primary' : 'accent'}
                    size="sm"
                  >
                    {topic.category}
                  </Badge>
                </div>

                <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  {topic.name}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Proficiency Indicator */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 space-y-1.5">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <span>Instructor Proficiency & Depth</span>
                  <span className="text-primary dark:text-primary-light font-code">{topic.proficiency}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${topic.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Teaching Methodology Section */}
      <div className="mt-16 bg-slate-50 dark:bg-slate-900/60 rounded-card p-6 sm:p-10 border border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Structured Workflow
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mt-3 mb-2">
            The 8-Step Teaching Methodology
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-body">
            How we transform a completely unknown algorithm into natural problem-solving mastery during our guided mentoring sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {methodologyData.methodologySteps.map((step, idx) => (
            <div key={idx} className="relative group">
              <Card hoverEffect={true} className="p-6 bg-white dark:bg-slate-800 h-full flex flex-col justify-between relative z-10 border-slate-200 dark:border-slate-700">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold text-sm flex items-center justify-center font-code shadow-sm">
                      {step.stepNumber}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>

              {/* Connecting arrow for larger screens */}
              {idx < 7 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-400 dark:text-slate-600">
                  <ChevronRight className="w-6 h-6 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
