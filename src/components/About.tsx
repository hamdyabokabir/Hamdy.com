import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { User, MapPin, Calendar, Briefcase, Award } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-right">
              <h2 className="text-blue-600 font-black tracking-widest text-sm uppercase mb-4">من أنا</h2>
              <h3 className="text-4xl font-black text-gray-900 mb-6">قصة نجاح بدأت بشغف وتطورت بالابتكار</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {personalInfo.story}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-right">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <User className="text-blue-600 mb-4 ml-auto" size={28} />
                <h4 className="text-gray-500 text-sm font-bold mb-1">الاسم الكامل</h4>
                <p className="text-gray-900 font-bold">{personalInfo.name}</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <Calendar className="text-blue-600 mb-4 ml-auto" size={28} />
                <h4 className="text-gray-500 text-sm font-bold mb-1">العمر</h4>
                <p className="text-gray-900 font-bold">{personalInfo.age} عاماً</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <MapPin className="text-blue-600 mb-4 ml-auto" size={28} />
                <h4 className="text-gray-500 text-sm font-bold mb-1">الدولة</h4>
                <p className="text-gray-900 font-bold">{personalInfo.location}</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <Briefcase className="text-blue-600 mb-4 ml-auto" size={28} />
                <h4 className="text-gray-500 text-sm font-bold mb-1">الخبرة</h4>
                <p className="text-gray-900 font-bold">{personalInfo.experience}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-[2.5rem] p-10 sm:p-16 text-right text-white">
              <Award className="text-blue-400 mb-8 ml-auto animate-bounce" size={48} />
              <h3 className="text-3xl font-black mb-10">إنجازاتي</h3>
              <div className="space-y-6">
                {personalInfo.achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <p className="text-lg font-medium text-gray-200 w-full">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
