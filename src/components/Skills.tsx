import React from 'react';
import { Code, Database, Shield, Wrench, TestTube, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Kotlin', level: 90 },
        { name: 'Spring Boot', level: 95 },
        { name: 'Microservices', level: 90 }
      ]
    },
    {
      category: 'Testing & Quality',
      icon: TestTube,
      color: 'from-emerald-500 to-emerald-600',
      skills: [
        { name: 'JUnit 5', level: 95 },
        { name: 'Mockito/MockK', level: 90 },
        { name: 'Integration Testing', level: 90 },
        { name: 'Test Containers', level: 85 }
      ]
    },
    {
      category: 'Database & Data',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'GraphQL', level: 85 },
        { name: 'Data Modeling', level: 88 },
        { name: 'SQL Optimization', level: 85 }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 85 },
        { name: 'Monitoring', level: 80 },
        { name: 'Prometheus', level: 75 }
      ]
    },
    {
      category: 'API & Security',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'REST APIs', level: 95 },
        { name: 'API Security', level: 90 },
        { name: 'OAuth/JWT', level: 85 },
        { name: 'OpenAPI/Swagger', level: 90 }
      ]
    },
    {
      category: 'Workflow & Architecture',
      icon: Wrench,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'Temporal SDK', level: 85 },
        { name: 'System Design', level: 88 },
        { name: 'Clean Architecture', level: 90 },
        { name: 'Design Patterns', level: 85 }
      ]
    }
  ];

  // Radar Chart Data (simplified visualization)
  const radarSkills = [
    { skill: 'Backend', level: 95, angle: 0 },
    { skill: 'Testing', level: 95, angle: 60 },
    { skill: 'API Design', level: 90, angle: 120 },
    { skill: 'DevOps', level: 80, angle: 180 },
    { skill: 'Security', level: 85, angle: 240 },
    { skill: 'Architecture', level: 88, angle: 300 }
  ];

  const centerX = 100;
  const centerY = 100;
  const maxRadius = 80;

  const getPointPosition = (angle: number, level: number) => {
    const radian = (angle * Math.PI) / 180;
    const radius = (level / 100) * maxRadius;
    const x = centerX + radius * Math.cos(radian - Math.PI / 2);
    const y = centerY + radius * Math.sin(radian - Math.PI / 2);
    return { x, y };
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive skill set focused on building reliable, testable, and scalable backend systems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Skills Radar Chart */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Skills Overview</h3>
              <div className="relative inline-block">
                <svg width="200" height="200" className="transform rotate-0">
                  {/* Grid lines */}
                  {[20, 40, 60, 80].map((radius) => (
                    <circle
                      key={radius}
                      cx={centerX}
                      cy={centerY}
                      r={radius}
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Axis lines */}
                  {radarSkills.map((_, index) => {
                    const angle = (index * 60) * Math.PI / 180;
                    const endX = centerX + maxRadius * Math.cos(angle - Math.PI / 2);
                    const endY = centerY + maxRadius * Math.sin(angle - Math.PI / 2);
                    return (
                      <line
                        key={index}
                        x1={centerX}
                        y1={centerY}
                        x2={endX}
                        y2={endY}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Skill polygon */}
                  <polygon
                    points={radarSkills.map(skill => {
                      const point = getPointPosition(skill.angle, skill.level);
                      return `${point.x},${point.y}`;
                    }).join(' ')}
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />

                  {/* Skill points */}
                  {radarSkills.map((skill, index) => {
                    const point = getPointPosition(skill.angle, skill.level);
                    return (
                      <circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#3b82f6"
                        className="drop-shadow-sm"
                      />
                    );
                  })}
                </svg>

                {/* Skill labels */}
                <div className="absolute inset-0 pointer-events-none">
                  {radarSkills.map((skill, index) => {
                    const labelPoint = getPointPosition(skill.angle, 110);
                    return (
                      <div
                        key={index}
                        className="absolute text-sm font-medium text-slate-700 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${labelPoint.x}px`, top: `${labelPoint.y}px` }}
                      >
                        {skill.skill}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Skills Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;