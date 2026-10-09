import { MapPin, CookingPot, ChevronRight, Phone } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { products, otherRiceTypes } from '@/data';
import type { PageRoute } from '@/router';

interface ProductsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  return (
    <>
      <PageHeader
        title="চালের তালিকা ও ক্যাটালগ"
        subtitle="দিনাজপুর, নওগাঁ, কুষ্টিয়া, বগুড়া, রাজশাহী, চাপাইনবাবগঞ্জ, টাঙ্গাইল, নেত্রকোনা, ব্রাহ্মণবাড়িয়া ও জামালপুর এবং বাংলাদেশের শীর্ষ মিল থেকে সংগৃহীত শতভাগ খাঁটি ও বাছাইকৃত চাল।"
        breadcrumb="চালের তালিকা"
      />

      <section className="py-16 px-4 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-stone-100"
              >
                <div className="relative h-56 overflow-hidden bg-cream-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-primary-500 text-white font-bengali text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary-600" />
                    <span className="font-bengali text-xs text-stone-700 font-medium">{product.origin}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bengali font-bold text-lg text-stone-800 group-hover:text-primary-700 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-bengali text-sm text-stone-500 mb-3 font-medium">{product.nameEn}</p>
                  <p className="font-bengali text-stone-600 text-sm leading-relaxed mb-4">
                    {product.fullDescription}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-1.5 bg-primary-50 text-primary-700 font-bengali text-xs font-medium px-3 py-1.5 rounded-lg">
                      <CookingPot className="w-3.5 h-3.5" />
                      {product.cookingUse}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Other rice types */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-12">
            <h2 className="font-bengali text-xl font-bold text-stone-800 mb-2">
              তালিকায় নেই এমন অন্যান্য বিশেষ চাউলসমূহ
            </h2>
            <p className="font-bengali text-stone-500 text-sm mb-5">
              উপরের তালিকা ছাড়াও আমাদের আড়তে সবসময় নিচের জাত ও ব্র্যান্ডের চাল বস্তা হিসেবে প্রস্তুত থাকে:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {otherRiceTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-2 bg-cream-100 rounded-lg px-4 py-3 border border-stone-100 hover:border-primary-200 hover:bg-primary-50/50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-primary-500" />
                  <span className="font-bengali text-sm text-stone-700">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-10 shadow-2xl">
            <h2 className="font-bengali text-2xl font-bold text-white mb-3">
              আপনার প্রয়োজনীয় চালের অর্ডার দিন
            </h2>
            <p className="font-bengali text-primary-100 mb-6 max-w-xl mx-auto">
              জাত, পরিমাণ ও এলাকাভেদে দাম ভিন্ন হয় — ফোন করলে সঠিক রেট সরাসরি জানিয়ে দেব।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:01320395462"
                className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bengali font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                ০১৩২০-৩৯৫৪৬২
              </a>
              <button
                onClick={() => onNavigate('order')}
                className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 text-white font-bengali font-semibold px-6 py-3.5 rounded-xl hover:bg-white/25 transition-all"
              >
                অনলাইন অর্ডার ফর্ম
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
