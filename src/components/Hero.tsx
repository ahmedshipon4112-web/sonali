import { Phone, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import type { PageRoute } from '@/router';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
}

const heroImage = 'https://images.pexels.com/photos/37395343/pexels-photo-37395343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="সোনালী ধানক্ষেত"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/70 to-stone-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/20 backdrop-blur-md border border-primary-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <ShieldCheck className="w-4 h-4 text-primary-300" />
            <span className="font-bengali text-primary-200 text-sm font-medium">
              ১০০% অরিজিনাল মিল ও ব্র্যান্ড চালের বিশ্বস্ত ঠিকানা
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-bengali text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-4 animate-fade-in-up animate-delay-100 text-balance">
            মেসার্স সোনালী ট্রেডার্স
            <span className="block text-primary-400 mt-2">প্রসিদ্ধ চাউলের আড়ৎ</span>
          </h1>

          {/* Subtitle */}
          <p className="font-bengali text-lg sm:text-xl text-stone-200 leading-relaxed mb-8 animate-fade-in-up animate-delay-200 text-pretty max-w-xl">
            দেশের শীর্ষস্থানীয় সকল ব্র্যান্ডের অরিজিনাল চাউল সরাসরি মিল রেটে পাইকারি সরবরাহ করা হয়।
            দিনাজপুর, নওগাঁ, কুষ্টিয়া ও দেশের সেরা মিল ও ব্র্যান্ডের প্রিমিয়াম কোয়ালিটি চাউল।
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animate-delay-300">
            <a
              href="tel:01320395462"
              className="group flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bengali font-semibold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              হটলাইন: ০১৩২০-৩৯৫৪৬২
            </a>
            <button
              onClick={() => onNavigate('products')}
              className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bengali font-semibold px-7 py-3.5 rounded-xl transition-all text-lg"
            >
              চালের তালিকা দেখুন
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg animate-fade-in-up animate-delay-500">
            <div className="text-center sm:text-left">
              <p className="font-bengali text-3xl font-bold text-primary-400">২০২১</p>
              <p className="font-bengali text-sm text-stone-300">প্রতিষ্ঠা</p>
            </div>
            <div className="text-center sm:text-left border-l border-white/20 pl-4">
              <p className="font-bengali text-3xl font-bold text-primary-400">১০০%</p>
              <p className="font-bengali text-sm text-stone-300">খাঁটি চাল</p>
            </div>
            <div className="text-center sm:text-left border-l border-white/20 pl-4">
              <p className="font-bengali flex items-center gap-1 text-3xl font-bold text-primary-400">
                <Truck className="w-7 h-7" />
                ফ্রি
              </p>
              <p className="font-bengali text-sm text-stone-300">ডেলিভারি</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[80px]">
          <path d="M0 100V40C240 80 480 0 720 20C960 40 1200 90 1440 60V100H0Z" fill="#fdfbf7" />
        </svg>
      </div>
    </section>
  );
}
