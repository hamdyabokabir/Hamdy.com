import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { projects } from '../data';
import { ExternalLink, Github, Filter } from 'lucide-react';

export const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'websites' | 'design' | 'branding' | 'ai'>('all');

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'websites', name: 'مواقع' },
    { id: 'design', name: 'تصميم' },
    { id: 'branding', name: 'هوية بصرية' },
    { id: 'ai', name: 'ذكاء اصطناعي' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-widest text-sm uppercase mb-4">معرض الأعمال</h2>
          <h3 className="text-4xl font-black text-gray-900 mb-12">مشاريع تجسد رؤيتنا للجمال والقوة التقنية</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                  filter === cat.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex gap-3">
                      {project.previewUrl && (
                        <a href={project.previewUrl} className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white transition-colors hover:text-black">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white transition-colors hover:text-black">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 text-right">
                  <div className="flex items-center justify-end gap-2 mb-4">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-end gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-black text-gray-400 border border-gray-100 px-2.5 py-1 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
