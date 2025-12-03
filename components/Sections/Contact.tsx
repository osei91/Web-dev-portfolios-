import React from 'react';
import { SectionProps } from '../../types';
import { PERSONAL_INFO } from '../../constants';
import GlassCard from '../ui/GlassCard';
import NeonButton from '../ui/NeonButton';
import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '../ui/BrandIcons';

const Contact: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 relative overflow-hidden">
      {/* Footer-specific background glow - visible mostly in dark mode */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-200/50 dark:from-cyan-900/20 to-transparent -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Let's Work Together</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-md">
              Have a project in mind or want to discuss the latest in AI? I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group">
                <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg">{PERSONAL_INFO.email}</span>
              </a>

              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 group">
                <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-full">
                  <MapPin size={24} />
                </div>
                <span className="text-lg">Accra, Ghana (Remote Worldwide)</span>
              </div>

              <a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group">
                <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-green-100 dark:group-hover:bg-green-500/20 transition-colors">
                  <WhatsAppIcon size={24} />
                </div>
                <span className="text-lg">Chat on WhatsApp</span>
              </a>
            </div>

            <div className="flex gap-4 mt-10">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all">
                <Linkedin size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all">
                <Twitter size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all">
                <WhatsAppIcon size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <GlassCard className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                />
              </div>

              <NeonButton type="submit" className="w-full">
                Send Message
              </NeonButton>
            </form>
          </GlassCard>

        </div>
        
        <div className="border-t border-slate-200 dark:border-white/10 mt-20 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;