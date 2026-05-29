import { motion } from 'motion/react';
import { X, Download, Mail, Phone, Globe, Github, Linkedin, Award, BookOpen, Briefcase, Zap } from 'lucide-react';
import { personalInfo, skills, projects } from '../data';

export const Resume = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto ltr" // Using LTR for the Resume for a formal look if desired, or keep RTL. User's content is Arabic, so RTL is better.
    >
      <div className="max-w-5xl mx-auto px-6 py-20 relative" dir="rtl">
        <button 
          onClick={onClose}
          className="fixed top-8 left-8 p-3 bg-gray-100 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-all z-[110]"
        >
          <X size={28} />
        </button>

        <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 shadow-2xl">
          <div className="flex flex-col md:flex-row-reverse justify-between items-start gap-12 border-b border-gray-200 pb-12">
            <div className="text-right flex-1">
              <h1 className="text-5xl font-black text-gray-900 mb-4">{personalInfo.name}</h1>
              <p className="text-2xl font-bold text-blue-600 mb-6">{personalInfo.titles[0]}</p>
              <p className="text-gray-600 leading-relaxed max-w-2xl ml-auto">
                {personalInfo.bio}
              </p>
            </div>
            <div className="space-y-4 text-right">
              <div className="flex items-center justify-end gap-3 text-gray-600 group cursor-pointer">
                <a href={personalInfo.socials.whatsapp} target="_blank" rel="noreferrer" className="font-bold hover:text-blue-600">{personalInfo.socials.whatsapp.split('/').pop()}</a>
                <Phone size={18} className="text-blue-600" />
              </div>
              <div className="flex items-center justify-end gap-3 text-gray-600 group cursor-pointer">
                <a href={`mailto:${personalInfo.socials.email}`} className="font-bold hover:text-blue-600">{personalInfo.socials.email}</a>
                <Mail size={18} className="text-blue-600" />
              </div>
              <div className="flex items-center justify-end gap-3 text-gray-600 group cursor-pointer">
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="font-bold hover:text-blue-600">LinkedIn Profile</a>
                <Linkedin size={18} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16 py-12">
            
            <div className="md:col-span-1 space-y-12 order-2 md:order-1">
              <div>
                <h3 className="flex items-center justify-end gap-3 text-xl font-black text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  المهارات
                  <Zap size={20} className="text-blue-600" />
                </h3>
                <div className="space-y-4">
                  {skills.slice(0, 8).map((skill, idx) => (
                    <div key={idx} className="text-right">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-400 font-bold">{skill.level}%</span>
                        <span className="text-sm font-bold text-gray-700">{skill.name}</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="flex items-center justify-end gap-3 text-xl font-black text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  اللغات
                  <Globe size={20} className="text-blue-600" />
                </h3>
                <div className="space-y-3 text-right">
                  <p className="font-bold text-gray-700">العربية (الأم)</p>
                  <p className="font-bold text-gray-700">الإنجليزية (جيد جداً)</p>
                </div>
              </div>

              <div>
                <h3 className="flex items-center justify-end gap-3 text-xl font-black text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  الشهادات
                  <Award size={20} className="text-blue-600" />
                </h3>
                <div className="space-y-4 text-right">
                  <div>
                    <p className="font-bold text-gray-900">Google UX Design Certificate</p>
                    <p className="text-xs text-gray-500 font-bold uppercase">Coursera - 2024</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Advanced React & TypeScript</p>
                    <p className="text-xs text-gray-500 font-bold uppercase">Udemy - 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-12 order-1 md:order-2">
              <div>
                <h3 className="flex items-center justify-end gap-3 text-2xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  الخبرة العملية
                  <Briefcase size={24} className="text-blue-600" />
                </h3>
                <div className="space-y-10">
                  <div className="text-right relative pr-6 border-r-2 border-blue-100">
                    <div className="absolute top-1 right-[-9px] w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                    <h4 className="text-xl font-black text-gray-900">مؤسس ومدير فني</h4>
                    <p className="text-blue-600 font-bold mb-3">HUNTER Digital Agency | 2023 - الآن</p>
                    <ul className="text-gray-600 space-y-2 list-disc list-inside">
                      <li>قيادة فريق من المطورين والمصممين لتنفيذ مشاريع رقمية متكاملة.</li>
                      <li>تطوير استراتيجيات الابتكار الرقمي للشركات الناشئة.</li>
                      <li>إدارة علاقات العملاء وضمان جودة التسليم النهائي.</li>
                    </ul>
                  </div>
                  <div className="text-right relative pr-6 border-r-2 border-blue-100">
                    <div className="absolute top-1 right-[-9px] w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
                    <h4 className="text-xl font-black text-gray-900">Full Stack Developer</h4>
                    <p className="text-blue-600 font-bold mb-3">Freelance | 2020 - 2023</p>
                    <ul className="text-gray-600 space-y-2 list-disc list-inside">
                      <li>بناء أكثر من 50 مشروعاً ناجحاً لعملاء محليين ودوليين.</li>
                      <li>تطبيق أفضل الممارسات في تجربة المستخدم والأمان البرمجي.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="flex items-center justify-end gap-3 text-2xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  التعليم
                  <BookOpen size={24} className="text-blue-600" />
                </h3>
                <div className="text-right">
                  <h4 className="text-xl font-black text-gray-900">بكالوريوس هندسة الحاسبات</h4>
                  <p className="text-blue-600 font-bold">جامعة القاهرة | 2018 - 2023</p>
                  <p className="text-gray-600 mt-2">تخصص في تطوير الأنظمة الذكية وتطبيقات الويب.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <button className="bg-gray-900 text-white px-10 py-5 rounded-3xl font-black text-xl hover:bg-blue-600 transition-all flex items-center gap-4 group">
              تحميل السيرة الذاتية (PDF)
              <Download size={24} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
