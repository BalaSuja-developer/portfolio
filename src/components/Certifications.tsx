import React from 'react';
import { ExternalLink, Award, BookOpen, TrendingUp, Users, Lightbulb } from 'lucide-react';
import hp from '../components/certifications/hp.jpg';
import java from '../components/certifications/java.png';
import javascript from '../components/certifications/javascript.jpg';
import junit from '../components/certifications/junit.jpg';
import apex from '../components/certifications/oracle-apex.jpg';
import react from '../components/certifications/react.png';
import simplilearn from '../components/certifications/simplilearn1.png';
import databricks from '../components/certifications/databricks.png';

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      name: "Certificate 1",
      image: hp
    },
    {
      id: 2,
      name: "Certificate 2",
      image: java
    },
    {
      id: 3,
      name: "Certificate 3",
      image: javascript
    },
    {
      id: 4,
      name: "Certificate 4",
      image: junit
    },
    {
      id: 5,
      name: "Certificate 5",
      image: apex
    },
    {
      id: 6,
      name: "Certificate 6",
      image: react
    },
    {
      id: 7,
      name: "Certificate 7",
      image: simplilearn
    },
    {
      id: 8,
      name: "Certificate 8",
      image: databricks
    }
  ];

  const hashnodeHighlights = [
    {
      icon: BookOpen,
      title: "Technical Insights",
      description: "Deep dives into software engineering, architecture, and best practices"
    },
    {
      icon: TrendingUp,
      title: "Real-World Solutions",
      description: "Practical approaches to common development challenges"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Engaging with developers worldwide through shared knowledge"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Exploring new technologies and sharing experiences"
    }
  ];

  return (
    <section id="certifications" className="py-20 min-h-screen bg-gradient-to-br from-slate-100 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Certifications Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Below are my certifications.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200 
                        hover:border-purple-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                        w-72"   // ⬅ FIXED WIDTH FOR ALL CARDS (same size)
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hashnode Blog Section */}
        <div className="bg-gradient-to-r from-purple-600 to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Blog on Hashnode
              </h2>
              <p className="text-purple-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Insights and experiences from my software development journey
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {hashnodeHighlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-purple-100 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="https://hashnode.com/@balasuja" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Visit My Hashnode Blog
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;