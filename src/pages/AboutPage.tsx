import { Scale, ShieldCheck, Truck, Handshake, MapPin, Factory, Users, Calendar, Phone, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { branches, sourcingRegions, brands, deliveryAreas } from '@/data';
import type { PageRoute } from '@/router';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

const values = [
  {
    icon: Scale,
    title: '১০০% ডিজিটাল ওজন নিশ্চয়তা',
    description: 'ডিজিটাল ওজন স্কেলে নিখুঁতভাবে মেপে বস্তা সরবরাহ করা হয়। পরিমাপে কোনো কমতি বা গরমিলের সুযোগ নেই।',
  },
  {
    icon: ShieldCheck,
    title: 'কৃত্রিম পলিশ ছাড়া আসল চাল',
    description: 'কোনো প্রকার রাসায়নিক প্রক্রিয়া বা ক্ষতিকর পলিশ ছাড়া সম্পূর্ণ প্রাকৃতিক ও স্বাস্থ্যসম্মত খাঁটি চাল সরবরাহ করি।',
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

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      <PageHeader
        title="আমাদের পরিচিতি ও পথচলা"
        subtitle="সততা, সঠিক ওজন ও গ্রাহক সন্তুষ্টির অঙ্গীকার নিয়ে মেসার্স সোনালী ট্রেডার্স।"
        breadcrumb="আমাদের সম্পর্কে"
        backgroundImage="https://images.pexels.com/photos/36063456/pexels-photo-36063456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <section className="py-16 px-4 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-block font-bengali text-primary-600 font-semibold text-sm tracking-wide uppercase mb-2">
                প্রতিষ্ঠা: ১ জানুয়ারি, ২০২১
              </span>
              <h2 className="font-bengali text-3xl font-bold text-stone-800 mb-6">আমাদের শুরু ও পথচলা</h2>
              <div className="space-y-4 font-bengali text-stone-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-stone-800">মেসার্স সোনালী ট্রেডার্স</strong> এর বাণিজ্যিক পথচলা শুরু হয়েছিল <strong className="text-primary-700">২০২১ সালের ১লা জানুয়ারি</strong>। খুব ছোট্ট পরিসরে সততা এবং নিষ্ঠাকে পুঁজি করে আমাদের যাত্রা আরম্ভ হয়েছিল।
                </p>
                <p>
                  মহান আল্লাহ তায়ালার অশেষ রহমতে এবং সম্মানিত ক্রেতাদের অগাধ ভালোবাসায় আজ সেই ছোট্ট প্রতিষ্ঠানটি টঙ্গী-গাজীপুর অঞ্চলের একটি শীর্ষস্থানীয় ও সুপ্রতিষ্ঠিত চালের আড়তে পরিণত হয়েছে।
                </p>
                <p>
                  দীর্ঘদিনের অভিজ্ঞতা, স্বচ্ছতা এবং আস্থার সাথে আমরা গ্রাহকসেবা প্রদান করে আসছি।
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white shadow-xl">
                <Calendar className="w-8 h-8 mb-3 text-primary-200" />
                <p className="font-bengali text-3xl font-bold">২০২১</p>
                <p className="font-bengali text-sm text-primary-100">প্রতিষ্ঠাবার্ষিকী</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
                <Users className="w-8 h-8 mb-3 text-secondary-600" />
                <p className="font-bengali text-3xl font-bold text-stone-800">৫০০+</p>
                <p className="font-bengali text-sm text-stone-500">সন্তুষ্ট গ্রাহক</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
                <Factory className="w-8 h-8 mb-3 text-accent-600" />
                <p className="font-bengali text-3xl font-bold text-stone-800">১২+</p>
                <p className="font-bengali text-sm text-stone-500">শীর্ষ ব্র্যান্ড</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl p-6 text-white shadow-xl">
                <Truck className="w-8 h-8 mb-3 text-secondary-200" />
                <p className="font-bengali text-3xl font-bold">ফ্রি</p>
                <p className="font-bengali text-sm text-secondary-100">নিজস্ব ডেলিভারি</p>
              </div>
            </div>
          </div>

          {/* Main service: Free delivery */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-stone-100 mb-16">
            <h2 className="font-bengali text-2xl font-bold text-stone-800 mb-6">
              আমাদের প্রধান সেবা: সম্পূর্ণ ফ্রি নিজস্ব ডেলিভারি
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4 font-bengali text-stone-600 text-lg leading-relaxed">
                <p>
                  আমাদের ব্যবসার অন্যতম প্রধান বিশেষত্ব হলো—আমরা নিয়মিত প্রতিটি খুচরা ও পাইকারি চালের দোকান থেকে সরাসরি অর্ডার সংগ্রহ করি এবং আমাদের নিজস্ব পরিবহন ব্যবস্থার মাধ্যমে পণ্য পৌঁছে দিই।
                </p>
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-5">
                  <h3 className="font-bengali font-bold text-primary-800 mb-1.5">কোনো হিডেন বা অতিরিক্ত চার্জ নেই!</h3>
                  <p className="font-bengali text-stone-600 text-base">
                    আমাদের কাছ থেকে চাল ক্রয়ে গ্রাহককে কোনো ডেলিভারি চার্জ বা লেবার চার্জ দিতে হয় না। সম্পূর্ণ ফ্রিতে আপনার দোকানের দোরগোড়ায় পণ্য পৌঁছে দেওয়া হয়।
                  </p>
                </div>
              </div>
              <div className="bg-cream-100 rounded-2xl p-5 border border-stone-100">
                <h3 className="font-bengali font-bold text-stone-800 mb-3">ডেলিভারি এরিয়া</h3>
                <div className="space-y-2">
                  {deliveryAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 font-bengali text-sm text-stone-600">
                      <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Delivery team */}
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 sm:p-10 text-white mb-16 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-bengali text-2xl font-bold mb-4">দক্ষ ও আন্তরিক ডেলিভারি টিম</h2>
                <p className="font-bengali text-stone-300 leading-relaxed mb-4">
                  আমাদের রয়েছে অত্যন্ত অভিজ্ঞ ও দায়িত্বশীল ডেলিভারি টিম। পণ্য লোডিং থেকে শুরু করে গ্রাহকের দোকানে নামানো পর্যন্ত প্রতিটি ধাপে সর্বোচ্চ সতর্কতা বজায় রাখা হয়।
                </p>
                <p className="font-bengali text-stone-300 leading-relaxed">
                  যাতে কোনো প্রকার ভোগান্তি বা ঝামেলা ছাড়াই বস্তার সঠিক নিরাপত্তা নিশ্চিত করে কাস্টমারের দোকানে সুন্দরভাবে চাল হস্তান্তর করা যায়।
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-primary-300" />
                  <p className="font-bengali text-lg font-bold">নিজস্ব</p>
                  <p className="font-bengali text-xs text-stone-400">পরিবহন বহর</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary-300" />
                  <p className="font-bengali text-lg font-bold">অভিজ্ঞ</p>
                  <p className="font-bengali text-xs text-stone-400">ডেলিভারি টিম</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-primary-300" />
                  <p className="font-bengali text-lg font-bold">নিরাপদ</p>
                  <p className="font-bengali text-xs text-stone-400">পণ্য হস্তান্তর</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <Handshake className="w-8 h-8 mx-auto mb-2 text-primary-300" />
                  <p className="font-bengali text-lg font-bold">আন্তরিক</p>
                  <p className="font-bengali text-xs text-stone-400">সেবামনোভাব</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality & weight */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-stone-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bengali font-bold text-lg text-stone-800 mb-2">{value.title}</h3>
                <p className="font-bengali text-stone-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Sourcing */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-16">
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
                <span key={region} className="inline-flex items-center gap-1.5 bg-secondary-50 text-secondary-700 font-bengali text-sm font-medium px-4 py-2 rounded-lg">
                  <MapPin className="w-3.5 h-3.5" />
                  {region}
                </span>
              ))}
            </div>
            <div className="border-t border-stone-100 pt-6">
              <p className="font-bengali text-stone-500 text-sm mb-3">শীর্ষস্থানীয় ব্র্যান্ড মিলসমূহ:</p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand.name} className="font-bengali text-sm bg-stone-50 text-stone-700 px-3.5 py-1.5 rounded-lg border border-stone-200 hover:border-primary-300 hover:text-primary-700 transition-colors">
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="mb-16">
            <h2 className="font-bengali text-2xl font-bold text-stone-800 mb-6 text-center">আমাদের শাখাসমূহ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {branches.map((branch) => (
                <div key={branch.id} className="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
                  <h3 className="font-bengali font-bold text-lg text-stone-800 mb-2">{branch.name}</h3>
                  <p className="font-bengali text-stone-500 text-sm flex items-start gap-1.5 mb-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-500" />
                    {branch.address}
                  </p>
                  <div className="space-y-1.5">
                    <a href={`tel:${branch.phone}`} className="flex items-center gap-2 font-bengali text-stone-700 hover:text-primary-700 transition-colors">
                      <Phone className="w-4 h-4 text-primary-500" />
                      {branch.phone}
                    </a>
                    {branch.phone2 && (
                      <a href={`tel:${branch.phone2}`} className="flex items-center gap-2 font-bengali text-stone-700 hover:text-primary-700 transition-colors">
                        <Phone className="w-4 h-4 text-stone-400" />
                        {branch.phone2}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-10 shadow-2xl">
            <h2 className="font-bengali text-2xl font-bold text-white mb-3">ব্যবসায়িক অংশীদার হতে চান?</h2>
            <p className="font-bengali text-primary-100 mb-6 max-w-xl mx-auto">
              আপনার দোকান, হোটেল বা প্রতিষ্ঠানের জন্য সেরা মানের চাল সরাসরি দোকানে পৌঁছে নিতে এখনই যোগাযোগ করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:01320395462" className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bengali font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Phone className="w-5 h-5" />
                ০১৩২০-৩৯৫৪৬২
              </a>
              <button onClick={() => onNavigate('order')} className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 text-white font-bengali font-semibold px-6 py-3.5 rounded-xl hover:bg-white/25 transition-all">
                অনলাইন অর্ডার করুন
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
