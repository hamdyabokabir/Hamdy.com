import { Facebook, Instagram, Linkedin, Github, Twitter } from 'lucide-react';
import { personalInfo } from '../data';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 text-right">
            <span className="text-3xl font-black text-blue-500 tracking-tighter mb-6 block">HUNTER Agency</span>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md ml-auto">
              وكالتنا ملتزمة بتقديم أعلى معايير الجودة في الحلول الرقمية، نؤمن بأن كل فكرة تستحق أن تخرج للنور بأفضل صورة ممكنة.
            </p>
          </div>
          
          <div className="text-right">
            <h4 className="text-lg font-bold mb-8">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#hero" className="hover:text-blue-500 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">من أنا</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">خدماتنا</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">أعمالنا</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-lg font-bold mb-8">تابعنا</h4>
            <div className="flex justify-end gap-4">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5">
                <Github size={20} />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5">
                <Instagram size={20} />
              </a>
              <a href={personalInfo.socials.tiktok} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5">
                <span className="font-bold text-xs">TikTok</span>
              </a>
              <a href={personalInfo.socials.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            تم التطوير بواسطة <span className="text-blue-500 font-bold">HUNTER Digital</span>
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white">الشروط والأحكام</a>
          </div>
          <p className="text-gray-500 text-sm order-last md:order-none">
            © {new Date().getFullYear()} HUNTER Digital Agency. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
