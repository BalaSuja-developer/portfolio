import React from 'react';
import { BookOpen, Calendar, MapPin, ChevronRight, Award, GraduationCap, Trophy, Globe } from 'lucide-react';
import sclLogo from '../components/icons/scl.png';
import msuLogo from '../components/icons/msu.jpeg';
import clgLogo from '../components/icons/clg.jpg';
import chittiLogo from '../components/icons/chitti.png';

const Education = () => {
  const educations = [
    {
      institution: "Chitti Training Program",
      degree: "STEM Training",
      period: "2025",
      duration: "Completed",
      location: "Training Program",
      grade: "Certified",
      description: "Completed hands-on STEM training focused on real-world programming and problem-solving techniques.",
      achievements: [
        "Hands-on Coding",
        "Team Projects",
        "STEM Certification"
      ],
      subjects: ["Programming", "Problem Solving", "Team Collaboration"],
      logo: chittiLogo,
      logoColor: "from-yellow-500 to-yellow-600",
      current: false
    },
    {
      institution: "Manonmaniam Sundaranar University",
      degree: "Masters in Computer Application",
      period: "July 2021 - June 2023",
      duration: "2 yrs",
      location: "Tirunelveli, Tamil Nadu, India",
      grade: "8.16 CGPA",
      description: "Advanced studies in computer applications with focus on software development, algorithms, and modern computing paradigms.",
      achievements: [
        "Specialized in advanced software development",
        "Completed research projects in modern computing",
        "Developed expertise in algorithms and data structures"
      ],
      subjects: ["Advanced Java", "Software Engineering", "Data Mining", "Cloud Computing", "AI & ML"],
      logo: msuLogo,
      logoColor: "from-purple-500 to-purple-700",
      current: false
    },
    {
      institution: "Sri Parasakthi College",
      degree: "Bachelors in Computer Application",
      period: "July 2018 - June 2021",
      duration: "3 yrs",
      location: "Courtallam, Tenkasi, Tamil Nadu, India",
      grade: "79.73 CWAM",
      description: "Comprehensive undergraduate program covering fundamentals of computer science, programming, and application development.",
      achievements: [
        "Strong foundation in computer science fundamentals",
        "Developed multiple academic projects",
        "Participated in coding competitions and workshops"
      ],
      subjects: ["Java", "C++", "Database Management", "Web Development", "Data Structures"],
      logo: clgLogo,
      logoColor: "from-purple-500 to-purple-700",
      current: false
    },
    {
      institution: "St. Micheals [G] Hr.Sec. School",
      degree: "Higher Secondary Certificate (HSC)",
      period: "July 2016 - June 2018",
      duration: "2 yrs",
      location: "Tenkasi, Tamil Nadu, India",
      grade: "75.80%",
      description: "Completed Higher Secondary Education with 80.9%, focusing on core subjects: Computer Science, Physics, Mathematics, and Chemistry.",
      achievements: [
        "Achieved 80.9% in board examinations",
        "Strong performance in science and mathematics",
        "Developed interest in computer science"
      ],
      subjects: ["Computer Science", "Physics", "Mathematics", "Chemistry"],
      logo: sclLogo,
      logoColor: "from-green-500 to-green-700",
      current: false
    }
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-slate-100 to-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Educational Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A foundation built on knowledge, dedication, and continuous learning
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-purple-500 via-purple-500 to-green-500 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educations.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Dot with Logo */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 border-white shadow-lg bg-gradient-to-br ${edu.logoColor} flex items-center justify-center`}>
                    <img 
                      src={edu.logo} 
                      alt="image"
                      className="w-10 h-10 object-contain" 
                    />
                  </div>
                </div>

                {/* Spacer for centering */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border-2 border-slate-200 hover:border-purple-400 relative group">
                    {/* Connecting Line to Dot - Desktop Only */}
                    <div className={`hidden md:block absolute top-12 w-12 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'right-full from-purple-300 to-transparent' 
                        : 'left-full from-transparent to-purple-300'
                    }`}></div>

                    {/* Institution Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${edu.logoColor} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <img 
                          src={edu.logo} 
                          alt="image"
                          className="w-10 h-10 object-contain" 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-purple-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-700 font-semibold mt-1">
                          <GraduationCap className="w-4 h-4 text-purple-500" />
                          <span className="text-base">{edu.institution}</span>
                        </div>
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-purple-600 font-semibold">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                        <span className="text-slate-500">· {edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-base">
                        <Trophy className="w-4 h-4" />
                        <span>Grade: {edu.grade}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-5">{edu.description}</p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-purple-200 via-purple-200 to-purple-200 mb-5"></div>

                    {/* Achievements */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Key Highlights</h4>
                      </div>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                            <ChevronRight className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subjects */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-purple-600" />
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Key Subjects</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-purple-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;