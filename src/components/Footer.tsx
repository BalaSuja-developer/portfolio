import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold">Java Full Stack Engineer</div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Crafting reliable, scalable backend systems with comprehensive testing strategies. 
              Passionate about quality engineering and continuous improvement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Timeline', href: '#timeline' },
                { label: 'Blog', href: '#blog' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <p className="text-slate-400 mb-4">
              Open to discussing new opportunities, technical challenges, or collaboration.
            </p>
            <div className="flex space-x-4">
              <a 
                          href="https://github.com/bala-suja" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                        >
                          <Github className="w-6 h-6 text-white group-hover:text-blue-200" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/balasuja-k/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                        >
                          <Linkedin className="w-6 h-6 text-white group-hover:text-blue-200" />
                        </a>
                        <a 
                          href="mailto:balasujak@gmail.com" 
                          className="group bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                        >
                          <Mail className="w-6 h-6 text-white group-hover:text-blue-200" />
                        </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-slate-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Java Full Stack Engineer Portfolio. Built with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>and rigorous testing.</span>
            </div>
            <div className="text-slate-400 text-sm">
             © Bala Suja K
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;