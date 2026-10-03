import { BadgeCheck, Building2, ChevronRight, Handshake } from 'lucide-react';
import { brands } from '@/data';
import type { PageRoute } from '@/router';

interface PartnerBrandsProps {
  onNavigate: (route: PageRoute) => void;
}

export default function PartnerBrands({ onNavigate }: PartnerBrandsProps) {
  return (
    <section className="py-16 px-4 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary-50 text-secondary-700 rounded-full px-4 py-2 mb-4">
              <Handshake className="w-4 h-4" />
              <span className="font-bengali text-sm font-semibold">বিশ্বস্ত ব্যবসায়িক সম্পর্ক</span>
            </div>
            <h2 className="font-bengali text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              যেসব কোম্পানি ও ব্র্যান্ডের সাথে আমরা ব্যবসা পরিচালনা করি
            </h2>
            <p className="font-bengali text-stone-600 text-lg leading-relaxed mb-5">
              দেশের শীর্ষস্থানীয় মিল ও ব্র্যান্ডের অরিজিনাল চাল আমরা সরাসরি সংগ্রহ করে খুচরা ও পাইকারি ক্রেতাদের কাছে সরবরাহ করি।
            </p>
            <button
              onClick={() => onNavigate('wholesale')}
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-bengali font-semibold transition-colors"
            >
              পাইকারি সরবরাহ সম্পর্কে জানুন
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group flex items-center gap-2.5 bg-cream-50 rounded-xl px-4 py-4 border border-stone-100 hover:border-primary-300 hover:bg-primary-50 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:bg-primary-100 transition-colors">
                  <Building2 className="w-4 h-4 text-primary-600" />
                </div>
                <span className="font-bengali text-sm font-medium text-stone-700 leading-tight">{brand.name}</span>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-3 flex items-center justify-center gap-2 pt-2 text-stone-500">
              <BadgeCheck className="w-4 h-4 text-secondary-600" />
              <span className="font-bengali text-sm">অরিজিনাল ব্র্যান্ড ও মিলের চাল সরবরাহের নিশ্চয়তা</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
