import React from 'react';
import { Github, Linkedin, Mail, Code, Code2, Database, TestTube } from 'lucide-react';
import image from '../components/image/photo-output.jpg';
import resume from '../components/documents/resume.pdf';
import LeetIcon from '../components/icons/leetcode.png';
import HackIcon from '../components/icons/hackerrank.png';
import TiltWrapper from './TiltWrapper';
import { Typewriter } from 'react-simple-typewriter';
import ParticleBackground from './Particles';

// Hero Component
const Hero = () => {
  return (
    
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-700 to-slate-800 flex items-center overflow-hidden pt-16">
      <ParticleBackground />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-emerald-400/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <TiltWrapper>
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-full blur-2xl opacity-20 scale-110 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-400/30 to-emerald-400/30 rounded-full blur-xl"></div>

                {/* MAIN CIRCLE (ONLY ONE) */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 
                                bg-gradient-to-br from-purple-500 to-emerald-500
                                rounded-full flex items-center justify-center
                                shadow-2xl border-8 border-white/20 overflow-hidden">
                  <img
                    src={image}
                    alt="Bala Suja K"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </TiltWrapper>

          <div className="text-center lg:text-left order-2 lg:order-2">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Bala Suja K
            </h1>
            <div>
              <h2 className="text-2xl text-slate-200 font-bold text-slate-100">
                <div className="relative inline-block">
                  <span>I am a </span>
                  <Typewriter
                    words={['Java Backend Engineer', 'Backend & Cloud Engineer', 'Microservices Engineer','Full Stack Java Engineer']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </div>
                
              </h2>

            </div>

            <h2 className="text-2ml text-slate-200 font-bold text-slate-100">2+ Years of Experience • Backend & API Engineering</h2>
            <p className="text-lg sm:text-ml text-purple-100 mb-8 leading-relaxed max-w-ml mx-auto lg:mx-0">
             Delivering scalable backend solutions, clean architectures, 
             and production-ready microservices with Spring Boot, Java, and cloud-native tools.
            </p>

            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <TestTube className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-semibold">Test-Driven</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Database className="w-4 h-4 text-emerald-400" />
                <span className="text-white text-sm font-semibold">Production-Grade</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-semibold">Tech Leadership</span>
              </div>
            </div> */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a 
                href={resume}        // <-- your actual PDF path
                target="_blank"           // <-- opens in new tab
                rel="noopener noreferrer" // <-- security best practice
                className="group bg-purple-200 hover:bg-purple-600 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Check Resume
              </a>
            </div>

            {/* <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://github.com/bala-suja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-white group-hover:text-blue-200" />
              </a>
              <a 
                href="https://www.linkedin.com/in/balasuja-k/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-blue-200" />
              </a>
              <a 
                href="mailto:balasujak@gmail.com" 
                className="group bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-white group-hover:text-blue-200" />
              </a>
            </div> */}
            <div className="flex justify-center lg:justify-start space-x-9">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/balasuja-k/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/60 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-black group-hover:text-blue-900" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/bala-suja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/60 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-black group-hover:text-black-900" />
              </a>

              {/* LeetCode */}
              <a 
                href="https://leetcode.com/u/balasuja032000/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/60 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <img src={LeetIcon} alt="LeetCode" className="w-5 h-5 group-hover:text-orange-900" />
              </a>

              {/* HackerRank */}
              <a 
                href="https://www.hackerrank.com/profile/balasuja032000"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/60 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <img src={HackIcon} alt="HackerRank" className="w-5 h-5 group-hover:text-green-600" />
              </a>

              {/* Mail */}
              <a 
                href="mailto:balasujak@gmail.com" 
                className="group bg-white/60 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-black group-hover:text-red-900" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;