import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Lightbulb, CheckCircle, Target, Sparkles, BookOpen, Smile, Compass } from 'lucide-react';
import { SectionTitle, Card, Badge } from '../ui';

const CORE_PRINCIPLES = [
  {
    title: "Understand before memorizing",
    description: "Never merely memorize an algorithm. We dissect why a data structure works, analyzing memory trade-offs and conceptual intuitions.",
    icon: <Brain className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
  },
  {
    title: "Learn by solving problems",
    description: "Theory alone won't pass interviews. We tackle practical coding problems directly, transforming theoretical concepts into active muscle memory.",
    icon: <Target className="w-6 h-6 text-blue-500 dark:text-blue-400" />
  },
  {
    title: "Make mistakes confidently",
    description: "Bugs and syntax errors are step-stones, not obstacles. Our interactive sessions cultivate a safe environment where errors lead to deep mastery.",
    icon: <Smile className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
  },
  {
    title: "Practice consistently",
    description: "60 minutes of daily deliberate practice builds unshakeable problem-solving confidence far better than irregular weekend cramming.",
    icon: <CheckCircle className="w-6 h-6 text-amber-500 dark:text-amber-400" />
  },
  {
    title: "Build logical thinking",
    description: "Learn to deconstruct complex statements on paper using plain human logic and diagrams before typing a single bracket.",
    icon: <Lightbulb className="w-6 h-6 text-amber-500 dark:text-amber-400" />
  },
  {
    title: "Connect theory with real examples",
    description: "See how queues manage printer spools, hash tables power browser caches, and graph trees build navigation systems.",
    icon: <Compass className="w-6 h-6 text-purple-500 dark:text-purple-400" />
  },
  {
    title: "Encourage questions without hesitation",
    description: "No coding doubt is ever too small or basic. Ask questions freely and receive patient, student-first explanations until everything clicks.",
    icon: <Heart className="w-6 h-6 text-rose-500 dark:text-rose-400" />
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Instructor Profile & Philosophy"
        title="Who Am I & How I Teach"
        subtitle="Bridging the gap between confusing computer science theory and practical, confident algorithmic problem solving."
      />

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
        
        {/* Left Col: Personal introduction & mission (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-slate-700 dark:text-slate-300 font-body text-base sm:text-lg leading-relaxed">
          <Card hoverEffect={false} className="p-6 sm:p-8 space-y-5 bg-gradient-to-br from-white via-slate-50 to-slate-100/50 dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-900 border-slate-200/80 dark:border-slate-700/80">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="md">Student-First Educator</Badge>
              <Badge variant="accent" size="md">NxtWave SDFT</Badge>
            </div>

            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Why should you learn DSA from Shyam?
            </h3>

            <p>
              I&apos;m passionate about teaching programming and <span className="font-semibold text-primary dark:text-primary-light">Data Structures & Algorithms in C++</span> using a practical, beginner-friendly approach. My primary focus is helping students understand <em className="font-medium text-slate-900 dark:text-white">why</em> an algorithm works before ever expecting them to memorize it.
            </p>

            <p>
              I enjoy breaking down intimidating subjects like Dynamic Programming, Pointers, and Graph Theory into simple explanations. My classroom cultivates curiosity and an encouraging environment where students feel comfortable asking questions without hesitation.
            </p>

            <p>
              Outside teaching, I actively develop modern software applications, exploring Full-Stack MERN architectures, Google Cloud, and Gemini AI technologies. This hands-on industry practice allows me to infuse sessions with authentic real-world engineering context rather than isolated textbook theory.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-sm font-semibold text-slate-800 dark:text-slate-200 border-t border-slate-200/80 dark:border-slate-700/80 pt-5">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" /> Patient Doubt Resolution
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" /> Interview Pattern Focus
              </span>
            </div>
          </Card>
        </div>

        {/* Right Col: Instructor Mission Statement & Stats (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          
          <Card hoverEffect={true} className="p-6 sm:p-8 bg-indigo-600 dark:bg-indigo-900/80 text-white border-indigo-500 flex-1 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                My Pedagogical Promise
              </span>
              <blockquote className="text-xl sm:text-2xl font-heading font-extrabold leading-snug">
                &quot;I&apos;m here to help you understand DSA, improve your problem-solving skills, and become confident enough to tackle coding interviews and real-world software challenges.&quot;
              </blockquote>
              <p className="text-indigo-100 text-sm font-medium">
                — Surakattula Shyam Kumar
              </p>
            </div>
          </Card>

          {/* Key Student Outcomes */}
          <div className="grid grid-cols-2 gap-4">
            <Card hoverEffect={false} className="p-5 text-center space-y-1 bg-slate-50 dark:bg-slate-800/50">
              <div className="text-3xl font-extrabold font-heading text-primary dark:text-primary-light">C++</div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Primary Language</p>
            </Card>
            <Card hoverEffect={false} className="p-5 text-center space-y-1 bg-slate-50 dark:bg-slate-800/50">
              <div className="text-3xl font-extrabold font-heading text-emerald-600 dark:text-emerald-400">2+ Years</div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Industry & Teaching Exp</p>
            </Card>
          </div>

        </div>

      </div>

      {/* Teaching Philosophy: Core Principles */}
      <div className="mt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-3">
            Core Teaching Principles
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Every session and code review is built upon seven pillars of modern developer education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_PRINCIPLES.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card className="h-full p-6 space-y-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/80 hover:border-indigo-500/40">
                <div className="w-12 h-12 rounded-btn bg-slate-100 dark:bg-slate-900 flex items-center justify-center shadow-sm">
                  {principle.icon}
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  {principle.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
