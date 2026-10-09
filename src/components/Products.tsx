import { MapPin, ChevronRight } from 'lucide-react';
import { products } from '@/data';
import type { PageRoute } from '@/router';

interface ProductsSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export default function ProductsSection({ onNavigate }: ProductsSectionProps) {
  const featured = products.slice(0, 6);

  return (
    <section className="py-20 px-4 bg-grain-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-bengali text-primary-600 font-semibold text-sm tracking-wide uppercase mb-2">
            আমাদের পণ্য
          </span>
          <h2 className="font-bengali text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            স্বনামধন্য কোম্পানির চালের পাইকারি আড়ৎ
          </h2>
          <p className="font-bengali text-stone-600 text-lg leading-relaxed">
            দিনাজপুর, নওগাঁ, কুষ্টিয়া, বগুড়া, রাজশাহী, চাপাইনবাবগঞ্জ, টাঙ্গাইল, নেত্রকোনা, ব্রাহ্মণবাড়িয়া, জামালপুর এবং বাংলাদেশের শীর্ষ মিল থেকে সংগৃহীত
            শতভাগ খাঁটি ও বাছাইকৃত চাল।
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-stone-100"
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bengali font-bold text-lg text-stone-800 mb-1 group-hover:text-primary-700 transition-colors">
                  {product.name}
                </h3>
                <p className="font-bengali text-sm text-stone-500 mb-3 font-medium">{product.nameEn}</p>
                <p className="font-bengali text-stone-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-bengali text-stone-600 mb-4">
            তালিকায় নেই এমন আরও অনেক জাত ও ব্র্যান্ডের চাউল আমাদের আড়তে প্রস্তুত থাকে।
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bengali font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            সম্পূর্ণ তালিকা দেখুন
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
