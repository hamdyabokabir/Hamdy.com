import { motion } from 'motion/react';
import { skills } from '../data';

export const Skills = () => {
  const categories = [
    { id: 'programming', name: 'البرمجة (Programming)' },
    { id: 'design', name: 'التصميم (Design)' },
    { id: 'ai', name: 'الذكاء الاصطناعي (AI)' },
    { id: 'marketing', name: 'التسويق (Marketing)' },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black tracking-widest text-sm uppercase mb-4">مهاراتي</h2>
          <h3 className="text-4xl font-black text-gray-900">أدواتي في بناء المستقبل الرقمي</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900 border-r-4 border-blue-600 pr-4 mb-8">
                {cat.name}
              </h4>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === cat.id)
                  .map((skill, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500 text-xs font-black">{skill.level}%</span>
                        <span className="text-gray-800 font-bold">{skill.name}</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-l from-blue-600 to-indigo-600 rounded-full group-hover:from-blue-500 group-hover:to-indigo-500 transition-all"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
