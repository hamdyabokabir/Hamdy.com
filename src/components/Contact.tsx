import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { faqs, personalInfo } from '../data';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'programming',
    budget: '',
    description: '',
    deadline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending request...', formData);
    alert('تم استلام طلبك بنجاح! سنتواصل معك قريباً.');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-8 text-right">ابدأ مشروعك معنا</h3>
              <form onSubmit={handleSubmit} className="space-y-6 text-right">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-gray-500 mb-2">الاسم بالكامل</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-gray-500 mb-2">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-black text-gray-500 mb-2">نوع الخدمة</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none appearance-none"
                  >
                    <option value="programming">برمجة وتطوير</option>
                    <option value="design">تصميم جرافيكي</option>
                    <option value="marketing">تسويق رقمي</option>
                    <option value="ai">حلول ذكاء اصطناعي</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-500 mb-2">وصف المشروع</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none"
                    placeholder="احك لنا أكثر عن فكرتك..."
                  ></textarea>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-gray-500 mb-2">الميزانية المتوقعة</label>
                    <input 
                      type="text" 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                      placeholder="مثال: 500$ - 1000$"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-gray-500 mb-2">موعد التسليم المرغوب</label>
                    <input 
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none ltr"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 group"
                >
                  إرسال الطلب الآن
                  <Send size={24} className="group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div className="text-right">
              <h2 className="text-blue-600 font-black tracking-widest text-sm uppercase mb-4">تواصل معنا</h2>
              <h3 className="text-4xl font-black text-gray-900 mb-6">دعنا نحول فكرتك إلى واقع ملموس</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg ml-auto">
                نحن متاحون للرد على استفساراتك ومناقشة مشاريعك في أي وقت. تواصل معنا عبر القنوات المفضلة لديك.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MessageCircle, label: "واتساب", value: personalInfo.socials.whatsapp.split('/').pop(), href: personalInfo.socials.whatsapp, color: "bg-green-100 text-green-600" },
                { icon: Mail, label: "البريد الإلكتروني", value: personalInfo.socials.email, href: `mailto:${personalInfo.socials.email}`, color: "bg-blue-100 text-blue-600" },
                { icon: MapPin, label: "الموقع", value: personalInfo.location + " - متاح للعمل عن بعد", href: "#", color: "bg-gray-100 text-gray-600" },
              ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noreferrer" className="flex items-center justify-end gap-6 group cursor-pointer">
                  <div className="text-right">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.value}</p>
                  </div>
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-sm font-black text-gray-900 mb-6 text-right">الأسئلة الشائعة</h4>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden text-right">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-bold text-gray-900">{faq.question}</span>
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
