import React from 'react';
import { Mail, MessageSquare, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/917660893848?text=Hi%20Shyam,%20I%20reviewed%20your%20instructor%20portfolio%20and%20would%20like%20to%20connect!";

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-lg font-heading shadow-md">
                SK
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-heading">
                Surakattula Shyam Kumar
              </span>
            </div>
            <p className="text-sm text-slate-400 font-body max-w-sm leading-relaxed">
              DSA Instructor (C++) & Software Development Faculty Trainee at NxtWave. Dedicated to simplifying algorithmic complexity and cultivating problem-solving confidence among students.
            </p>
            <p className="text-xs text-slate-500">
              Department of Data Structures & Algorithms &bull; NxtWave CCBP 4.0
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Curricular Sections
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Instructor Profile & Philosophy</a></li>
              <li><a href="#teaching" className="hover:text-white transition-colors">C++ & DSA Curriculum</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Student Learning Roadmap</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Engineering Projects</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Curated Learning Resources</a></li>
            </ul>
          </div>

          {/* Connect & Reach Out (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Direct Student Channels
            </h4>
            <p className="text-xs text-slate-400">
              Have a doubt or need guidance on coding preparation? Reach out directly.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all border border-[#25D366]/40 shadow-sm"
                title="WhatsApp Direct Message"
                aria-label="WhatsApp Direct Message"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
              <a
                href="mailto:s.shyam_kumar@outlook.com"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shyam-kumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/HoneyKumar8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700"
                title="GitHub Repositories"
                aria-label="GitHub Repositories"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Surakattula Shyam Kumar. Designed with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> for Students & Aspiring Developers.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">Built with React 19, TypeScript, Tailwind CSS & Gemini AI</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-1 min-h-[36px] px-3"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
