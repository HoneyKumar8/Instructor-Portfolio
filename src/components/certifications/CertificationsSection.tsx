import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, ChevronRight, CheckCircle } from 'lucide-react';
import { SectionTitle, Card, Badge, Button, Modal } from '../ui';
import certificationsData from '../../data/certifications.json';
import { type CertificationItem } from '../../types';

export const CertificationsSection: React.FC = () => {
  const [showAllModal, setShowAllModal] = useState<boolean>(false);
  const certs: CertificationItem[] = certificationsData as CertificationItem[];
  
  // Display only priority certifications first to avoid certificate overload
  const priorityCerts = certs.filter(c => c.priority);

  return (
    <section id="certifications" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Verified Expertise"
        title="Priority Technical Certifications"
        subtitle="We avoid certificate overload by featuring only relevant credentials in MERN Full Stack, Google AI, Cloud infrastructure, and rigorous algorithmic problem solving."
      />

      {/* Priority Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {priorityCerts.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="flex flex-col h-full"
          >
            <Card className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/80 hover:border-indigo-500/50 transition-all">
              
              <div className="space-y-3">
                {/* Issuer Badge & Verification Tag */}
                <div className="flex items-center justify-between">
                  <Badge variant="primary" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                    {cert.badge}
                  </Badge>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-code">
                    {cert.date}
                  </span>
                </div>

                {/* Certification Title */}
                <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h4>

                {/* Issuer Name */}
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 font-body">
                  Issued by: {cert.issuer}
                </p>

                {/* Skill Chips */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-500 mb-1.5 uppercase">Covered Competencies:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom verify link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Credential
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary dark:text-primary-light hover:underline inline-flex items-center gap-1 p-1"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </Card>
          </motion.div>
        ))}
      </div>

      {/* Option to View All Certifications */}
      <div className="text-center">
        <Button
          variant="secondary"
          size="md"
          onClick={() => setShowAllModal(true)}
          icon={<ChevronRight className="w-5 h-5" />}
        >
          View All Technical Certifications ({certs.length})
        </Button>
      </div>

      {/* Complete Certifications Modal */}
      <Modal
        isOpen={showAllModal}
        onClose={() => setShowAllModal(false)}
        title="Complete Instructor Certification Repository"
        maxWidth="3xl"
      >
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            A comprehensive breakdown of Surakattula Shyam Kumar&apos;s earned certifications across software development, AI models, database architectures, and educator foundations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certs.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-btn border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-code text-indigo-600 dark:text-indigo-400">{cert.badge}</span>
                    <span className="text-xs text-slate-400">{cert.date}</span>
                  </div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-base font-heading">
                    {cert.title}
                  </h5>
                  <p className="text-xs text-slate-500">Issuer: <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span></p>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                  {cert.skills.map((s, sIdx) => (
                    <span key={sIdx} className="text-[11px] bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};
