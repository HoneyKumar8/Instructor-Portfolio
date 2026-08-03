import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileCode, Clock, Map, CheckCircle2, Database, Calendar, ExternalLink, BookmarkCheck, AlertCircle } from 'lucide-react';
import { SectionTitle, Card, Badge, Button } from '../ui';
import resourcesData from '../../data/resources.json';
import { type ResourceItem } from '../../types';

export const ResourcesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const resources: ResourceItem[] = resourcesData as ResourceItem[];

  const categories = ['All', 'C++ Notes', 'DSA Cheatsheets', 'Roadmaps', 'Strategy', 'Practice'];

  const filteredResources = activeCategory === 'All'
    ? resources
    : resources.filter(r => r.category === activeCategory);

  const getResourceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode': return <FileCode className="w-6 h-6 text-indigo-500" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-500" />;
      case 'Map': return <Map className="w-6 h-6 text-blue-500" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-500" />;
      case 'Database': return <Database className="w-6 h-6 text-purple-500" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-rose-500" />;
      default: return <BookmarkCheck className="w-6 h-6 text-indigo-500" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'accent';
      case 'All Levels': return 'secondary';
      case 'Advanced': return 'primary';
      default: return 'muted';
    }
  };

  return (
    <section id="resources" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Dedicated Learning Hub"
        title="Curated Student Resources"
        subtitle="Free learning materials, cheat sheets, and problem-solving strategies prepared specifically to reinforce your daily C++ & DSA study habits."
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all min-h-[40px] ${
              activeCategory === cat
                ? 'bg-primary text-white shadow-md font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat} {cat === 'All' ? `(${resources.length})` : `(${resources.filter(r => r.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((item, idx) => {
          const isAvailable = item.status === 'available';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="flex flex-col h-full"
            >
              <Card className={`p-6 flex-1 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/80 ${
                isAvailable ? 'hover:border-indigo-500/50' : 'opacity-85'
              }`}>
                
                <div className="space-y-4">
                  {/* Header: Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-btn bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center shadow-sm">
                      {getResourceIcon(item.iconName)}
                    </div>
                    <Badge variant="muted" size="sm">{item.category}</Badge>
                  </div>

                  {/* Title & Difficulty/Duration */}
                  <div>
                    <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant={getDifficultyColor(item.difficulty)} size="sm">
                        {item.difficulty}
                      </Badge>
                      {item.duration && (
                        <span className="text-slate-500 font-code">&bull; {item.duration}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action CTA or Coming Soon Badge */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  {isAvailable && item.url ? (
                    <Button
                      variant="secondary"
                      size="sm"
                      fullWidth={true}
                      onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
                      icon={<ExternalLink className="w-4 h-4" />}
                      className="text-xs font-semibold"
                    >
                      Open Resource Reference
                    </Button>
                  ) : (
                    <div className="w-full py-2.5 px-4 rounded-btn bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 text-center flex items-center justify-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span>More content coming soon</span>
                    </div>
                  )}
                </div>

              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
