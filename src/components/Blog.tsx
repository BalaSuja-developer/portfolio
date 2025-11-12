import React from 'react';
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  // Placeholder blog posts - in real implementation, these would be fetched from Hashnode API
  const blogPosts = [
    {
      title: 'Engineering Reliable Systems: From Concept to Production',
      summary: 'Deep dive into architecting production-grade microservices with comprehensive testing strategies and observability.',
      publishedAt: '2024-01-15',
      readTime: '10 min read',
      tags: ['Architecture', 'Testing', 'Production'],
      slug: 'engineering-reliable-systems'
    },
    {
      title: 'Workflow Automation with Temporal: A Healthcare Case Study',
      summary: 'Implementing complex healthcare workflows with Temporal SDK, focusing on reliability and compliance requirements.',
      publishedAt: '2024-01-08',
      readTime: '12 min read',
      tags: ['Temporal', 'Healthcare', 'Workflows'],
      slug: 'temporal-healthcare-workflows'
    },
    {
      title: 'Advanced PostgreSQL Patterns for Domain Modeling',
      summary: 'Leveraging PostgreSQL features like custom enums and JSONB for flexible, scalable domain representations.',
      publishedAt: '2024-01-01',
      readTime: '8 min read',
      tags: ['PostgreSQL', 'Database', 'Modeling'],
      slug: 'postgresql-domain-modeling'
    },
    {
      title: 'CI/CD Quality Gates: Safeguarding Production Deployments',
      summary: 'Implementing automated quality gates within CI/CD pipelines to eliminate regressions and ensure system stability.',
      publishedAt: '2023-12-20',
      readTime: '9 min read',
      tags: ['CI/CD', 'Quality', 'DevOps'],
      slug: 'cicd-quality-gates'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technical knowledge sharing on system architecture, quality engineering, and collaborative development practices
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">{blogPosts[0].summary}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(blogPosts[0].publishedAt)}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <a 
                href="#" 
                className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Read Article
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{post.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{post.summary}</p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <a 
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Hashnode Integration Note */}
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-lg px-6 py-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-blue-900">Auto-synced from Hashnode</div>
              <div className="text-sm text-blue-700">Latest articles automatically updated from my technical blog</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;