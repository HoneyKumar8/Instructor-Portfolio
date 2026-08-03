import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, MessageSquare, ArrowRight, CheckCircle2, Terminal, Cpu, GraduationCap, Award } from 'lucide-react';
import { Button, Badge, Card } from '../ui';

export const HeroSection: React.FC = () => {
  const whatsappUrl = "https://wa.me/917660893848?text=Hi%20Shyam,%20I%20would%20like%20to%20learn%20more%20about%20your%20DSA%20guidance!";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-8 sm:pt-16 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle decorative visual background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Tagline Eyebrow */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="accent" size="md" icon={<Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}>
                Learn DSA the Practical Way
              </Badge>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I&apos;m <span className="text-primary dark:text-primary-light bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Shyam Kumar</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 font-heading leading-snug">
                DSA Instructor (C++) & Software Development Faculty Trainee
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed">
              I believe DSA isn&apos;t about memorizing algorithms—it&apos;s about learning how to think logically and solve problems with confidence. As a Faculty Trainee at <span className="font-semibold text-slate-900 dark:text-white">NxtWave CCBP 4.0</span>, I mentor aspiring developers, simplify complex concepts, and guide students toward becoming interview-ready programmers.
            </p>

            {/* Key Value Propositions chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Understand Before Memorizing
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> C++ & STL Mastery
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Real-World Engineering
              </span>
            </div>

            {/* CTA Buttons Grid */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollTo('roadmap')}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Learning
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => window.dispatchEvent(new CustomEvent('open-ai-mentor'))}
                icon={<Sparkles className="w-5 h-5 text-amber-500" />}
                iconPosition="left"
              >
                Ask AI Mentor
              </Button>
              <Button
                variant="whatsapp"
                size="md"
                onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
                icon={<MessageSquare className="w-5 h-5" />}
                iconPosition="left"
              >
                WhatsApp Me
              </Button>
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('resources')}
                className="text-sm font-medium text-primary dark:text-primary-light hover:underline inline-flex items-center gap-1.5 p-1 transition-colors"
              >
                <BookOpen className="w-4 h-4" /> View Curated Learning Resources & Cheat Sheets &rarr;
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Card with Glow (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md relative">
              {/* Special Glow Shadow on Hero Card Only */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-card blur-xl opacity-25 dark:opacity-40 -z-10" />

              <Card hoverEffect={false} className="p-6 sm:p-8 bg-white dark:bg-[#131C31] border-2 border-indigo-500/20 dark:border-indigo-500/30 shadow-2xl relative z-10">
                <div className="flex flex-col items-center text-center space-y-6">
                  
                  {/* Passport Photo Badge */}
                  <div className="relative">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-img overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 relative">
                      <img
                        src="/profile.jpg"
                        alt="Surakattula Shyam Kumar - DSA Instructor"
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          // Clean fallback placeholder if image load fails
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80';
                        }}
                      />
                    </div>
                    {/* Active Mentoring indicator */}
                    <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-badge bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg border-2 border-white dark:border-slate-800">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      Active Mentor
                    </div>
                  </div>

                  {/* Profile Credentials */}
                  <div className="space-y-1.5 w-full">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                      Surakattula Shyam Kumar
                    </h2>
                    <p className="text-sm font-medium text-primary dark:text-indigo-400 font-body">
                      Department of Data Structures & Algorithms
                    </p>
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mt-2">
                      <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> Faculty Trainee at NxtWave CCBP 4.0
                    </div>
                  </div>

                  {/* Technology Chips */}
                  <div className="w-full pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                      Teaching & Tech Stack
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      <Badge variant="primary" size="sm" icon={<Terminal className="w-3 h-3" />}>C++</Badge>
                      <Badge variant="primary" size="sm">DSA</Badge>
                      <Badge variant="secondary" size="sm">STL</Badge>
                      <Badge variant="accent" size="sm">Problem Solving</Badge>
                      <Badge variant="muted" size="sm" icon={<Cpu className="w-3 h-3" />}>MERN Stack</Badge>
                      <Badge variant="warning" size="sm">Gemini AI</Badge>
                    </div>
                  </div>

                  {/* Quick student stat / badge */}
                  <div className="w-full bg-slate-50 dark:bg-slate-800/60 rounded-btn p-3 text-left border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-slate-900 dark:text-white">100DaysOfCode Completer & MERN Certified</p>
                      <p className="text-slate-500 dark:text-slate-400">Committed to guiding students from beginner to interview-ready.</p>
                    </div>
                  </div>

                </div>
              </Card>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
