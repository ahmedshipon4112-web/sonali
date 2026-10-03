import { Scale, ShieldCheck, Truck, Handshake, MapPin, Factory, ChevronRight } from 'lucide-react';
import { brands, sourcingRegions } from '@/data';
import type { PageRoute } from '@/router';

interface AboutSectionProps {
  onNavigate: (route: PageRoute) => void;
}

const features = [
  {
    icon: Scale,
    title: '১০০% ডিজিটাল ওজন নিশ্চয়তা',
    description: 'ডিজিটাল ওজন স্কেলে নিখুঁতভাবে মেপে বস্তা সরবরাহ করা হয়। পরিমাপে কোনো কমতি বা গরমিলের সুযোগ নেই।',
  },
  {
    icon: ShieldCheck,
    title: 'কৃত্রিম পলিশ ছাড়া আসল চাল',
    description: 'কোনো প্রকার রাসায়নিক প্রক্রিয়া বা ক্ষতিকর পলিশ ছাড়া সম্পূর্ণ প্রাকৃতিক ও স্বাস্থ্যসম্মত খাঁটি চাল।',
  },
  {
    icon: Truck,
    title: 'নিজস্ব গাড়িতে ফ্রি ডেলিভারি',
    description: 'নিয়মিত প্রতিটি খুচরা ও পাইকারি দোকান থেকে সরাসরি অর্ডার সংগ্রহ করে নিজস্ব পরিবহনে পণ্য পৌঁছে দিই।',
  },
  {
    icon: Handshake,
    title: 'দীর্ঘদিনের সততা ও সুনাম',
    description: 'ব্যবসার শুরু থেকেই স্বচ্ছতা বজায় রাখা এবং কাস্টমারের বিশ্বাস অর্জনই আমাদের দীর্ঘ পথচলার মূল চাবিকাঠি।',
  },
];

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section className="py-20 px-4 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block font-bengali text-primary-600 font-semibold text-sm tracking-wide uppercase mb-2">
              আমাদের গল্প
            </span>
            <h2 className="font-bengali text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
              আমাদের শুরু ও পথচলা
            </h2>
            <div className="space-y-4 font-bengali text-stone-600 text-lg leading-relaxed">
              <p>
                <strong className="text-stone-800">মেসার্স সোনালী ট্রেডার্স</strong> এর বাণিজ্যিক পথচলা শুরু হয়েছিল{' '}
                <strong className="text-primary-700">২০২১ সালের ১লা জানুয়ারি</strong>। খুব ছোট্ট পরিসরে সততা এবং নিষ্ঠাকে পুঁজি করে আমাদের যাত্রা আরম্ভ হয়েছিল।
              </p>
              <p>
                মহান আল্লাহ তায়ালার অশেষ রহমতে এবং সম্মানিত ক্রেতাদের অগাধ ভালোবাসায় আজ সেই ছোট্ট প্রতিষ্ঠানটি টঙ্গী-গাজীপুর অঞ্চলের একটি শীর্ষস্থানীয় ও সুপ্রতিষ্ঠিত চালের আড়তে পরিণত হয়েছে।
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="mt-6 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-bengali font-semibold transition-colors"
            >
              বিস্তারিত পড়ুন
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="font-bengali text-xl font-bold mb-6 text-primary-100">আমাদের সেবাসমূহ</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <Factory className="w-8 h-8 mx-auto mb-2 text-primary-200" />
                  <p className="font-bengali text-2xl font-bold">সেরা</p>
                  <p className="font-bengali text-sm text-primary-100">মিল থেকে সংগ্রহ</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <Scale className="w-8 h-8 mx-auto mb-2 text-primary-200" />
                  <p className="font-bengali text-2xl font-bold">ডিজিটাল</p>
                  <p className="font-bengali text-sm text-primary-100">ওজন নিশ্চয়তা</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-primary-200" />
                  <p className="font-bengali text-2xl font-bold">ফ্রি</p>
                  <p className="font-bengali text-sm text-primary-100">নিজস্ব ডেলিভারি</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <Handshake className="w-8 h-8 mx-auto mb-2 text-primary-200" />
                  <p className="font-bengali text-2xl font-bold">২টি</p>
                  <p className="font-bengali text-sm text-primary-100">সক্রিয় শাখা</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-stone-100"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bengali font-bold text-lg text-stone-800 mb-1.5">
                  {feature.title}
                </h3>
                <p className="font-bengali text-stone-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sourcing regions */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-secondary-600" />
            </div>
            <div>
              <h3 className="font-bengali font-bold text-lg text-stone-800">সরাসরি মোকাম ও সেরা ব্র্যান্ড থেকে সংগ্রহ</h3>
              <p className="font-bengali text-stone-500 text-sm">দেশের সেরা ধানের জেলা ও বিখ্যাত মোকামগুলো থেকে সরাসরি মিল রেটে বাছাইকৃত চাল</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 mb-6">
            {sourcingRegions.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-1.5 bg-secondary-50 text-secondary-700 font-bengali text-sm font-medium px-4 py-2 rounded-lg"
              >
                <MapPin className="w-3.5 h-3.5" />
                {region}
              </span>
            ))}
          </div>

          {/* Brands */}
          <div className="border-t border-stone-100 pt-6">
            <p className="font-bengali text-stone-500 text-sm mb-3">শীর্ষস্থানীয় ব্র্যান্ড মিলসমূহ:</p>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand.name}
                  className="font-bengali text-sm bg-stone-50 text-stone-700 px-3.5 py-1.5 rounded-lg border border-stone-200 hover:border-primary-300 hover:text-primary-700 transition-colors"
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
