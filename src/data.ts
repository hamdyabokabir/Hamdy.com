import { Project, Service, Skill, Testimonial, FAQ, Stat } from './types';

export const personalInfo = {
  name: "حمدي محمد أبو كبير (HUNTER)",
  titles: [
    "Full Stack Developer",
    "UI/UX Designer",
    "AI Solutions Developer",
    "Founder of HUNTER Digital Agency"
  ],
  bio: "مطور ومصمم مصري متخصص في تطوير المواقع والتطبيقات وتصميم الهوية البصرية وحلول الذكاء الاصطناعي. أساعد الشركات والأفراد على تحويل أفكارهم إلى مشاريع رقمية احترافية.",
  location: "مصر",
  experience: "5+ سنوات",
  age: "24",
  profileImage: "/image/e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg",
  story: "بدأت رحلتي في عالم البرمجة بشغف كبير للاكتشاف والتعلم الذاتي. تطورت مهاراتي من خلال العمل على مشاريع متنوعة وتحديات حقيقية، مما أدى إلى تأسيس وكالة HUNTER Digital Agency لتكون منصة انطلاق للحلول الرقمية المبتكرة.",
  achievements: [
    "🏆 مراكز أولى في مسابقات الابتكار",
    "🏆 تنفيذ مشاريع حقيقية لشركات كبرى",
    "🏆 تأسيس وكالة HUNTER Digital Agency",
    "🏆 تطوير مشاريع AI ومواقع متكاملة"
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/ahmed-mohammed-hamdi-mohamed/",
    github: "https://github.com/hamdyabokabir",
    facebook: "https://www.facebook.com/Hamdy.Mohamed.Abokabir",
    instagram: "https://www.instagram.com/7amdy_abokabir",
    tiktok: "https://www.tiktok.com/@7amdy_abokabir",
    email: "7amdyabokabir@gmail.com",
    whatsapp: "https://wa.me/201029448695"
  }
};

export const skills: Skill[] = [
  { name: "HTML", level: 95, category: 'programming' },
  { name: "CSS", level: 90, category: 'programming' },
  { name: "JavaScript", level: 92, category: 'programming' },
  { name: "TypeScript", level: 88, category: 'programming' },
  { name: "React", level: 90, category: 'programming' },
  { name: "Firebase", level: 85, category: 'programming' },
  { name: "Node.js", level: 80, category: 'programming' },
  { name: "Photoshop", level: 85, category: 'design' },
  { name: "Illustrator", level: 80, category: 'design' },
  { name: "Figma", level: 90, category: 'design' },
  { name: "Prompt Engineering", level: 95, category: 'ai' },
  { name: "AI Image Generation", level: 90, category: 'ai' },
  { name: "Content Strategy", level: 85, category: 'marketing' },
  { name: "Branding", level: 90, category: 'marketing' }
];

export const services: Service[] = [
  {
    id: "dev",
    title: "التطوير (Development)",
    description: "بناء مواقع وتطبيقات قوية وسريعة تلبي احتياجات سوق العمل.",
    icon: "Code",
    features: ["مواقع الشركات", "المتاجر الإلكترونية", "Landing Pages", "Portfolio Websites", "لوحات التحكم"]
  },
  {
    id: "design",
    title: "التصميم (Design)",
    description: "ابتكار هويات بصرية وتصاميم إبداعية تترك انطباعاً لا ينسى.",
    icon: "Palette",
    features: ["تصميم بوستات", "شعارات", "هويات بصرية", "بنرات إعلانية"]
  },
  {
    id: "marketing",
    title: "التسويق (Marketing)",
    description: "إدارة وتنمية حضورك الرقمي من خلال استراتيجيات تسويقية مدروسة.",
    icon: "TrendingUp",
    features: ["إدارة صفحات", "خطط محتوى", "حملات إعلانية", "تحليل المنافسين"]
  },
  {
    id: "ai",
    title: "خدمات الذكاء الاصطناعي (AI)",
    description: "تسخير قوة الذكاء الاصطناعي لتطوير أعمالك وزيادة الإنتاجية.",
    icon: "Cpu",
    features: ["توليد محتوى", "إنشاء صور", "كتابة سيناريوهات", "Chatbots"]
  }
];

export const projects: Project[] = [
  {
    id: "amarna",
    title: "Al-Amarna Group",
    description: "موقع متكامل لمجموعة العمارنة للاستثمار العقاري والمقاولات.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    category: 'websites',
    technologies: ["React", "TypeScript", "Tailwind", "Firebase"],
    challenges: "توفير تجربة مستخدم سلسة لعرض مئات العقارات مع نظام تصفية متقدم.",
    solutions: "استخدام تقنيات التخزين المؤقت وتحسين أداء الصور مع Firebase Firestore.",
    previewUrl: "#",
    githubUrl: "#"
  },
  {
    id: "hunter-agency",
    title: "HUNTER Agency Website",
    description: "الموقع الرسمي لوكالة HUNTER الرقمية لعرض الخدمات والأعمال.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    category: 'websites',
    technologies: ["React", "Motion", "Vite"],
    previewUrl: "#"
  },
  {
    id: "7amdyai",
    title: "7AMD-YAI Assistant",
    description: "مساعد ذكي يعتمد على نماذج Gemini لتحليل البيانات وتوليد المحتوى.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    category: 'ai',
    technologies: ["Gemini API", "Node.js", "React"],
    challenges: "تقليل زمن الاستجابة والتعامل مع السياقات الطويلة.",
    solutions: "تحسين الـ Prompts واستخدام الـ Streaming لاستقبال الردود فوراً."
  },
  {
    id: "branding-01",
    title: "EcoBrand Identity",
    description: "تصميم هوية بصرية كاملة لشركة منتجات صديقة للبيئة.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070",
    category: 'branding',
    technologies: ["Illustrator", "Photoshop", "Figma"],
    client: "EcoLife Co.",
    duration: "15 يوم"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "أحمد علي",
    role: "رئيس مجلس إدارة شركة العقارات",
    content: "خدمة ممتازة وسرعة في التنفيذ. الموقع ساعدنا كثيراً في الوصول لعملاء جدد.",
    rating: 5,
    image: "/image/download.jpg"
  },
  {
    name: "سارة محمود",
    role: "مؤسسة متجر إلكتروني",
    content: "التصميم احترافي جداً ويهتم بأدق التفاصيل. أنصح بالتعامل مع حمدي.",
    rating: 5,
    image: "/image/download.jpg"
  }
];

export const faqs: FAQ[] = [
  {
    question: "كم تستغرق مدة التنفيذ؟",
    answer: "تعتمد المدة على حجم المشروع ومتطلباته، وبشكل عام تبدأ من أسبوع للمشاريع البسيطة."
  },
  {
    question: "هل يوجد دعم فني بعد التسليم؟",
    answer: "نعم، نقدم دعماً فنياً مستمراً لضمان عمل المشروع بكفاءة ومعالجة أي مشاكل قد تظهر."
  }
];

export const stats: Stat[] = [
  { label: "مشروع مكتمل", value: 50, suffix: "+" },
  { label: "عميل راضٍ", value: 20, suffix: "+" },
  { label: "سنوات خبرة", value: 5, suffix: "+" },
  { label: "رضا العملاء", value: 100, suffix: "%" }
];
