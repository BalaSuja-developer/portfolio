import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitors, setVisitors] = React.useState(1247);

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-6">
          <p className="text-slate-300 mb-4">
            Thanks for visiting my portfolio. Let's build something amazing together!
          </p>

          {/* Visitor Count */}
          <div className="flex justify-center items-center mb-4">
            👥 Total Visitors
          </div>
          <div className="flex justify-center items-center mb-4">
          <img 
            src="https://profile-counter.deno.dev/balasuja/count.svg" 
            alt="Visitor Count" 
            className="h-6"
          />
          </div>
         

          {/* Contact Details */}
          <div className="flex justify-center items-center space-x-6 mb-6 text-slate-400 text-sm">
            <a href="mailto:balasujak@gmail.com" className="hover:text-white transition-colors flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              balasujak@gmail.com
            </a>
            <a href="https://github.com/bala-suja" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/balasuja-k/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
              <Linkedin className="w-4 h-4 mr-1" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Bala Suja K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;