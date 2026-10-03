import { Truck, Tag, Factory, Calendar, Scale, Layers, Phone, ChevronRight, Building2, Utensils } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { wholesaleAdvantages, wholesaleClients, brands } from '@/data';
import type { PageRoute } from '@/router';

interface WholesalePageProps {
  onNavigate: (route: PageRoute) => void;
}

const advantageIcons = [Tag, Truck, Factory, Calendar, Scale, Layers];

export default function WholesalePage({ onNavigate }: WholesalePageProps) {
  return (
    <>
      <PageHeader
        title="পাইকারি ও বাণিজ্যিক সরবরাহ"
        subtitle="হোটেল, রেস্তোরাঁ, ক্যান্টিন, ক্যাটারিং ও খুচরা ও পাইকারি বিক্রেতাদের জন্য বিশেষ পাইকারি সুবিধা।"
        breadcrumb="পাইকারি সরবরাহ"
        backgroundImage="https://images.pexels.com/photos/37051981/pexels-photo-37051981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <section className="py-16 px-4 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          {/* Who we supply */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-bengali text-3xl font-bold text-stone-800 mb-4">আমরা কাদের সরবরাহ করি?</h2>
            <p className="font-bengali text-stone-600 text-lg leading-relaxed">
              টঙ্গী-গাজীপুর অঞ্চলের সকল ধরনের পাইকারি ও বাণিজ্যিক ক্রেতার জন্য আমরা নিরবচ্ছিন্ন চাল সরবরাহ নিশ্চিত করি।
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {wholesaleClients.map((client, i) => {
              const Icon = i % 2 === 0 ? Building2 : Utensils;
              return (
                <div
                  key={client}
                  className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow border border-stone-100"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="font-bengali text-stone-700 font-medium">{client}</span>
                </div>
              );
            })}
          </div>

          {/* Advantages */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-stone-100 mb-16">
            <h2 className="font-bengali text-2xl sm:text-3xl font-bold text-stone-800 mb-2 text-center">
              পাইকারি সরবরাহে আমাদের সুবিধাসমূহ
            </h2>
            <p className="font-bengali text-stone-500 text-center mb-8">
              কেন ব্যবসায়ীরা আমাদের আড়তকে প্রথম পছন্দ হিসেবে বেছে নেন
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wholesaleAdvantages.map((advantage, i) => {
                const Icon = advantageIcons[i % advantageIcons.length];
                return (
                  <div
                    key={advantage.title}
                    className="group p-6 rounded-2xl border border-stone-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bengali font-bold text-lg text-stone-800 mb-2">{advantage.title}</h3>
                    <p className="font-bengali text-stone-600 text-sm leading-relaxed">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Special offer banner */}
          <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                  <Tag className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bengali text-white font-bold text-2xl mb-1">বিশেষ অফার</h3>
                  <p className="font-bengali text-secondary-100 text-lg">
                    ১০ বস্তা বা তার অধিক অর্ডারে বিশেষ ছাড় ও ফ্রি ডেলিভারি!
                  </p>
                </div>
              </div>
              <a
                href="tel:01320395462"
                className="flex items-center gap-2 bg-white text-secondary-700 font-bengali font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                এখনই কল করুন
              </a>
            </div>
          </div>

          {/* Brands */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-12">
            <h2 className="font-bengali text-xl font-bold text-stone-800 mb-2">উপলব্ধ ব্র্যান্ডসমূহ</h2>
            <p className="font-bengali text-stone-500 text-sm mb-5">দেশের শীর্ষস্থানীয় ব্র্যান্ড মিলসমূহের চাল সরাসরি আমাদের আড়তে মজুত থাকে:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center gap-2 bg-cream-100 rounded-lg px-4 py-3 border border-stone-100 hover:border-primary-200 hover:bg-primary-50/50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-primary-500" />
                  <span className="font-bengali text-sm text-stone-700">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-bengali text-2xl font-bold text-stone-800 mb-4">
              ব্যবসায়িক অংশীদার হতে চান?
            </h2>
            <p className="font-bengali text-stone-600 mb-6 max-w-xl mx-auto">
              আপনার দোকান, হোটেল বা প্রতিষ্ঠানের জন্য সেরা মানের চাল সরাসরি দোকানে পৌঁছে নিতে এখনই যোগাযোগ করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:01320395462"
                className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bengali font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                হটলাইন: ০১৩২০-৩৯৫৪৬২
              </a>
              <button
                onClick={() => onNavigate('order')}
                className="flex items-center justify-center gap-2 bg-white border-2 border-primary-200 hover:border-primary-400 text-primary-700 font-bengali font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
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
