import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black tracking-widest text-sm uppercase mb-4">آراء العملاء</h2>
          <h3 className="text-4xl font-black text-gray-900">شهادات نعتز بها من شركاء النجاح</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-10 left-10 text-blue-100" size={64} />
              
              <div className="flex gap-1 mb-6 justify-end">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl text-gray-700 mb-10 leading-relaxed text-right relative z-10 italic">
                "{item.content}"
              </p>

              <div className="flex items-center justify-end gap-5">
                <div className="text-right">
                  <h4 className="text-lg font-black text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500 font-bold">{item.role}</p>
                </div>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 rounded-2xl object-cover grayscale brightness-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
