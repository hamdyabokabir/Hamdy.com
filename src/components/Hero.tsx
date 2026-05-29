import { motion } from 'motion/react';
import { ArrowLeft, Download, MessageCircle, Send } from 'lucide-react';
import { personalInfo } from '../data';

export const Hero = ({ onOpenResume }: { onOpenResume: () => void }) => {
  return (
    <section id="hero" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6 -z-10 animate-pulse"></div>
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl -rotate-3 -z-10"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider leading-none mb-1">Status</p>
                    <p className="text-sm font-black text-gray-900 leading-none">Available for Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-right"
          >
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
              مرحباً بك في عالم HUNTER الرقمي
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              {personalInfo.name.split(' (')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-indigo-600">
                (HUNTER)
              </span>
            </h1>
            
            <div className="flex flex-wrap justify-end gap-3 mb-8">
              {personalInfo.titles.map((title, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-lg text-sm font-medium border border-transparent hover:border-blue-200 transition-all"
                >
                  {title}
                </span>
              ))}
            </div>

            <p className="text-xl text-gray-600 mb-10 max-w-xl ml-auto leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap justify-end gap-4">
              <a 
                href="#portfolio"
                className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all group"
              >
                عرض الأعمال
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </a>
              <a 
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100"
              >
                واتساب
                <MessageCircle size={20} />
              </a>
              <div className="flex gap-2 w-full sm:w-auto">
                <button 
                  onClick={onOpenResume}
                  className="flex-1 sm:flex-none justify-center items-center gap-2 border-2 border-gray-200 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all inline-flex"
                >
                  CV
                  <Download size={20} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

