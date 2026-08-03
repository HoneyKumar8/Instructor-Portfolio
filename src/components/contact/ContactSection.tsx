import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MessageSquare, Copy, Check, Send, Sparkles, User, FileText, Lock } from 'lucide-react';
import { SectionTitle, Card, Button, Badge } from '../ui';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { useToast } from '../../context/ToastContext';

// Zod validation schema as required by Document 5 Section 20
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid academic or professional email address." }),
  subject: z.string().min(3, { message: "Please specify a subject (e.g. 'C++ Mentorship Doubt')." }),
  message: z.string().min(10, { message: "Please enter a detailed message or doubt (at least 10 characters)." }),
  honeypot: z.string().optional(), // Spam protection
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const emailAddress = "s.shyam_kumar@outlook.com";
  const whatsappUrl = "https://wa.me/917660893848?text=Hi%20Shyam,%20I%20reviewed%20your%20instructor%20portfolio%20and%20would%20like%20to%20connect!";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    }
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    showToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 3000);
  };

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeypot) {
      // Quietly reject spam submissions
      reset();
      return;
    }

    setIsSubmitting(true);
    try {
      // Send real email directly to instructor's Outlook via FormSubmit service
      const res = await fetch('https://formsubmit.co/ajax/s.shyam_kumar@outlook.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Portfolio Inquiry: ${data.subject} (from ${data.name})`,
          Student_Name: data.name,
          Student_Email: data.email,
          Topic_Subject: data.subject,
          Message: data.message,
          _template: 'table'
        }),
      });

      if (res.ok) {
        showToast("Thank you! Your message has been sent to Shyam's Outlook inbox successfully.", "success");
        reset();
      } else {
        throw new Error("Form submission error");
      }
    } catch (error) {
      // Fallback API attempt if offline or CORS issue
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => null);

      showToast("Message recorded! Feel free to also ping immediately on WhatsApp.", "info");
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Reach Out & Connect"
        title="Let's Learn Together"
        subtitle="Have a technical coding doubt, need guidance on your interview roadmap, or want to discuss student mentoring? Reach out freely through any channel below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Col: Contact Channels & WhatsApp card (5 cols) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          
          <Card hoverEffect={false} className="p-6 sm:p-8 space-y-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/80">
            <div>
              <Badge variant="accent" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Direct Instructor Access
              </Badge>
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mt-3">
                Preferred Student Channels
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-body mt-1">
                We believe in approachability. You don&apos;t need to jump through corporate hurdles to ask a simple programming question.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Button Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-btn bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-slate-900 dark:text-white transition-all min-h-[56px] group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-bold font-heading text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    WhatsApp Chat (Recommended)
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-code">+91 7660893848 &bull; Instant reply</p>
                </div>
              </a>

              {/* Email Copy Box */}
              <div className="flex items-center justify-between p-4 rounded-btn bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-slate-900 dark:text-white font-heading">Direct Email</p>
                    <p className="text-xs text-slate-500 font-code truncate">{emailAddress}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="shrink-0 text-xs px-2.5 min-h-[36px]"
                  title="Copy Email Address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </Button>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/shyam-kumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-btn bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors min-h-[44px]"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" /> LinkedIn Profile
              </a>
              <a
                href="https://github.com/HoneyKumar8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-btn bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 hover:text-slate-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors min-h-[44px]"
              >
                <GithubIcon className="w-4 h-4" /> GitHub Repos
              </a>
            </div>
          </Card>

          {/* Privacy & Trust info */}
          <div className="p-4 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-indigo-500" />
            <span>We respect your privacy. No promotional spam or tracking.</span>
          </div>

        </div>

        {/* Right Col: Interactive Contact Form validated with React Hook Form + Zod (7 cols) */}
        <div className="lg:col-span-7">
          <Card hoverEffect={false} className="p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/80 shadow-lg">
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
              Send a Message or Doubt
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-body">
              Fill out this student inquiry form, and Shyam Kumar will follow up with structured guidance or code explanations.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              
              {/* Honeypot for Spam Protection */}
              <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-indigo-500" /> Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-input bg-slate-50 dark:bg-slate-900 border font-body text-slate-900 dark:text-white focus:outline-none focus:ring-2 min-h-[48px] transition-colors ${
                    errors.name
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary/20'
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                    &bull; {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-indigo-500" /> Your Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="rahul@college.edu"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-input bg-slate-50 dark:bg-slate-900 border font-body text-slate-900 dark:text-white focus:outline-none focus:ring-2 min-h-[48px] transition-colors ${
                    errors.email
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary/20'
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                    &bull; {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-indigo-500" /> Subject or Topic <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. C++ Pointers Doubt or Mentoring Inquiry"
                  {...register("subject")}
                  className={`w-full px-4 py-3 rounded-input bg-slate-50 dark:bg-slate-900 border font-body text-slate-900 dark:text-white focus:outline-none focus:ring-2 min-h-[48px] transition-colors ${
                    errors.subject
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary/20'
                  }`}
                  aria-invalid={errors.subject ? "true" : "false"}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                    &bull; {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-indigo-500" /> Detailed Message or Doubt <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your question or algorithm problem here..."
                  {...register("message")}
                  className={`w-full p-4 rounded-input bg-slate-50 dark:bg-slate-900 border font-body text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-colors resize-y ${
                    errors.message
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary/20'
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                    &bull; {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth={true}
                disabled={isSubmitting}
                icon={isSubmitting ? <span className="animate-spin text-lg">⏳</span> : <Send className="w-5 h-5" />}
              >
                {isSubmitting ? 'Sending Message...' : 'Submit Message to Shyam'}
              </Button>

            </form>
          </Card>
        </div>

      </div>
    </section>
  );
};
