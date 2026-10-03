import { BadgeCheck, Boxes, MapPin, Scale, Truck, Users, ChevronRight } from 'lucide-react';
import { deliveryAreas, sourcingRegions } from '@/data';
import type { PageRoute } from '@/router';

interface HomeHighlightsProps {
  onNavigate: (route: PageRoute) => void;
}

const highlights = [
  {
    icon: Scale,
    title: 'সঠিক ওজন',
    description: 'ডিজিটাল স্কেলে প্রতিটি বস্তার নির্ভুল ওজন নিশ্চিত করা হয়।',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: Truck,
    title: 'নিজস্ব ডেলিভারি',
    description: 'টঙ্গী-গাজীপুর অঞ্চলে নিজস্ব গাড়িতে পণ্য পৌঁছে দিই।',
    color: 'bg-secondary-50 text-secondary-600',
  },
  {
    icon: BadgeCheck,
    title: 'খাঁটি পণ্য',
    description: 'বিশ্বস্ত মিল ও ব্র্যান্ড থেকে সংগ্রহ করা অরিজিনাল চাল।',
    color: 'bg-accent-50 text-accent-600',
  },
  {
    icon: Users,
    title: 'ব্যবসায়িক সাপোর্ট',
    description: 'দোকান, হোটেল, ক্যান্টিন ও ক্যাটারিং ব্যবসার নিয়মিত সঙ্গী।',
    color: 'bg-primary-50 text-primary-600',
  },
];

export default function HomeHighlights({ onNavigate }: HomeHighlightsProps) {
  return (
    <section className="py-20 px-4 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block font-bengali text-primary-600 font-semibold text-sm tracking-wide uppercase mb-2">
            কেন সোনালী ট্রেডার্স
          </span>
          <h2 className="font-bengali text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            চাল কেনার সহজ ও নির্ভরযোগ্য ঠিকানা
          </h2>
          <p className="font-bengali text-stone-600 text-lg leading-relaxed">
            ভালো মান, সঠিক ওজন, ন্যায্য পাইকারি রেট এবং সময়মতো ডেলিভারি—একসাথে সব সুবিধা।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${highlight.color}`}>
                <highlight.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bengali font-bold text-lg text-stone-800 mb-2">{highlight.title}</h3>
              <p className="font-bengali text-stone-600 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 p-8 text-white shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-bengali text-primary-200 text-sm mb-2">সরাসরি সংগ্রহ</p>
                <h3 className="font-bengali text-2xl font-bold">দেশের সেরা মোকাম থেকে</h3>
              </div>
              <Boxes className="w-9 h-9 text-primary-200 flex-shrink-0" />
            </div>
            <p className="font-bengali text-primary-100 leading-relaxed mb-6">
              দিনাজপুর, নওগাঁ, কুষ্টিয়া ও চাপাইনবাবগঞ্জের মিল এবং মোকাম থেকে বাছাই করা চাল আমাদের আড়তে আসে।
            </p>
            <div className="flex flex-wrap gap-2">
              {sourcingRegions.map((region) => (
                <span key={region} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 font-bengali text-sm text-primary-50">
                  <MapPin className="w-3.5 h-3.5" />
                  {region}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 border border-stone-100 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-bengali text-secondary-600 text-sm mb-2">দ্রুত ডেলিভারি</p>
                <h3 className="font-bengali text-2xl font-bold text-stone-800">আপনার এলাকায় পৌঁছে দিই</h3>
              </div>
              <Truck className="w-9 h-9 text-secondary-600 flex-shrink-0" />
            </div>
            <p className="font-bengali text-stone-600 leading-relaxed mb-6">
              কোনো গাড়ি ভাড়া বা লেবার চার্জ ছাড়াই নির্ধারিত এলাকায় নিজস্ব গাড়িতে চাল পৌঁছে দেওয়া হয়।
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {deliveryAreas.slice(0, 6).map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 bg-secondary-50 text-secondary-700 rounded-full px-3 py-1.5 font-bengali text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  {area}
                </span>
              ))}
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-bengali font-semibold transition-colors"
            >
              ডেলিভারি সম্পর্কে জানুন
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
