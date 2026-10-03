import { Truck, MapPin, BadgeCheck } from 'lucide-react';
import { deliveryAreas } from '@/data';

export default function DeliveryBanner() {
  return (
    <section className="relative -mt-2 z-20 bg-gradient-to-r from-primary-600 via-primary-600 to-accent-600 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Icon + title */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center animate-float">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-bengali text-white font-bold text-xl leading-tight">
                নিজস্ব গাড়িতে সম্পূর্ণ ফ্রি ডেলিভারি
              </h2>
              <p className="font-bengali text-primary-100 text-sm">
                কোনো গাড়ি ভাড়া বা লেবার চার্জ নেই!
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-white/20" />

          {/* Areas */}
          <div className="flex-1 w-full">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {deliveryAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5 text-white font-bengali text-sm hover:bg-white/20 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary-200" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <BadgeCheck className="w-5 h-5 text-white" />
            <span className="font-bengali text-white font-semibold text-sm">
              মুদি ও পাইকারি দোকানের জন্য
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
