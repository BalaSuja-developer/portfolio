import React from 'react';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Technical Leadership",
      description: "Leading critical modules from concept to production with comprehensive test-driven methodologies"
    },
    {
      icon: Award,
      title: "Complex Domain Mastery",
      description: "Engineering reliable systems for logistics and healthcare with advanced workflow automation"
    },
    {
      icon: BookOpen,
      title: "Collaborative Excellence",
      description: "Mentoring teams through code reviews, technical knowledge sharing, and documentation best practices"
    },
    {
      icon: Users,
      title: "Quality Assurance",
      description: "Championing automated testing and observability to ensure stable, traceable, and adaptable systems"
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-br py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-slate-700 leading-relaxed">
             
              <p>
                I am a <strong>Java Fullstack Engineer</strong> specializing in building resilient, 
                user-centric platforms that blend robust backend architecture with 
                dynamic frontend experiences. With deep expertise in Java, Spring Boot, 
                REST/GraphQL API design, and rich frontend solutions using React.js, 
                I bridge the gap between business needs and technological execution. 
                My technical leadership is demonstrated through the delivery of 
                production-grade microservices, workflow automation frameworks, and meticulously tested APIs.
              </p>
              <p>
                I thrive in fast-paced, collaborative environments—translating ambitious business goals 
                into elegant, scalable software architectures. Driven by curiosity and practical 
                problem-solving, I excel at dissecting challenging requirements and orchestrating 
                <strong> robust solutions under pressure</strong>.
              </p>
              <p>
                By championing automated testing and observability, I ensure every line of code 
                contributes to a system that is stable, traceable, and adaptable to change. My work 
                reflects a blend of deep backend mastery, collaborative communication, and a 
                <strong> relentless pursuit of engineering excellence</strong>.
              </p>
            </div>

            {/* Professional Summary Box */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Professional Summary</h3>
              <p className="text-slate-700 leading-relaxed">
                Results-oriented Java and Kotlin backend developer with a proven track record delivering 
                secure, maintainable, and high-performance application infrastructure. Known for deploying 
                rigorous automated tests within CI/CD pipelines, I safeguard system integrity and support 
                rapid feature delivery at scale. My experience spans leading critical modules from zero to 
                launch, optimizing systems for high-throughput scenarios, and mentoring peers through code 
                reviews and technical knowledge sharing.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{highlight.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;