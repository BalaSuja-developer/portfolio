import React from 'react';
import { Github, Linkedin, Mail, Code2, Database, TestTube } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-emerald-400/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
            <Code2 className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Main Tagline */}
        <div> <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" >Bala Suja K</h1></div>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Java Fullstack Engineer
        </h3>
        <div className="text-2xl md:text-2xl text-blue-200 mb-8 font-light">
          Test-Driven Solutions for Complex Domains
        </div>
        
        {/* Subtitle */}
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Engineering highly reliable systems for logistics and healthcare through production-grade 
          microservices, workflow automation frameworks, and meticulously tested APIs.
        </p>

        {/* Key Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <TestTube className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold">Test-Driven Excellence</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Database className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-semibold">Production-Grade Systems</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Code2 className="w-5 h-5 text-purple-400" />
            <span className="text-white font-semibold">Technical Leadership</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/BalaSuja-developer" 
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

        {/* Scroll Indicator
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;