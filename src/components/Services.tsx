import { motion } from 'motion/react';
import { services } from '../data';
import * as LucideIcons from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-400 font-black tracking-widest text-sm uppercase mb-4 tracking-[0.2em]">خدمات الوكالة</h2>
          <h3 className="text-4xl lg:text-5xl font-black mb-6">حلول رقمية متكاملة لنمو أعمالك</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            HUNTER Digital Agency هي شريكك الاستراتيجي في رحلة التحول الرقمي، نقدم حلولاً تدمج بين الإبداع الفني والقوة التقنية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                  <Icon className="text-blue-400 group-hover:text-white" size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4">{service.title}</h4>
                <p className="text-gray-400 mb-8 line-clamp-3 text-right">
                  {service.description}
                </p>
                <ul className="space-y-3 text-right">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-end gap-2 text-sm font-bold text-gray-300">
                      {feature}
                      <LucideIcons.CheckCircle2 className="text-blue-500" size={16} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Work stages */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-black mb-16">مراحل العمل لدينا</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { id: 1, name: "استلام الطلب", desc: "تحليل الاحتياجات" },
              { id: 2, name: "التخطيط", desc: "خطة التنفيذ" },
              { id: 3, name: "التصميم", desc: "النماذج الأولية" },
              { id: 4, name: "التطوير", desc: "البرمجة" },
              { id: 5, name: "المراجعة", desc: "الاختبار" },
              { id: 6, name: "التسليم", desc: "النسخة النهائية" },
              { id: 7, name: "الدعم الفني", desc: "متابعة مستمرة" },
            ].map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-blue-400 border border-blue-400/20">
                  {step.id}
                </div>
                <h5 className="font-bold text-sm mb-1">{step.name}</h5>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
