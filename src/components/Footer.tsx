import { Phone, Mail, MapPin, Facebook, MessageCircle, Clock } from 'lucide-react';
import type { PageRoute } from '@/router';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* লোগো বড় ও সুন্দর করা হয়েছে */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}logo.jpeg`}
                  alt="মেসার্স সোনালী ট্রেডার্স"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-bengali font-bold text-lg text-white">মেসার্স সোনালী ট্রেডার্স</h3>
                <p className="font-bengali text-xs text-stone-400">প্রসিদ্ধ চাউলের আড়ৎ</p>
              </div>
            </div>
            <p className="font-bengali text-sm text-stone-400 leading-relaxed">
              সততা, সঠিক ওজন ও গ্রাহক সন্তুষ্টির অঙ্গীকার নিয়ে টঙ্গী-গাজীপুর অঞ্চলের একটি শীর্ষস্থানীয় চালের আড়ৎ।
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bengali font-semibold text-white mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 font-bengali text-sm">
              {[
                { label: 'হোম', route: 'home' as PageRoute },
                { label: 'চালের তালিকা', route: 'products' as PageRoute },
                { label: 'পাইকারি সরবরাহ', route: 'wholesale' as PageRoute },
                { label: 'অনলাইন অর্ডার', route: 'order' as PageRoute },
                { label: 'আমাদের সম্পর্কে', route: 'about' as PageRoute },
                { label: 'যোগাযোগ ও শাখা', route: 'contact' as PageRoute },
              ].map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => onNavigate(item.route)}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bengali font-semibold text-white mb-4">যোগাযোগ</h4>
            <ul className="space-y-3 font-bengali text-sm">
              <li>
                <a href="tel:01320395462" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                  <span>০১৩২০-৩৯৫৪৬২</span>
                </a>
              </li>
              <li>
                <a href="mailto:sonalitradersrice@gmail.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                  <span>sonalitradersrice@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span>সমাজকল্যাণ রোড, আমির আলী মার্কেট, দত্তপাড়া, হোসেন মার্কেট, টঙ্গী, গাজীপুর।</span>
              </li>
            </ul>
          </div>

          {/* Social & Working hours */}
          <div>
            <h4 className="font-bengali font-semibold text-white mb-4">আমাদের ফলো করুন</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/share/19B9g5cXhD/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-primary-400 hover:bg-stone-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801320395462"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-primary-400 hover:bg-stone-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:01320395462"
                className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-primary-400 hover:bg-stone-700 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-stone-800/60 p-4 rounded-xl border border-stone-800 space-y-2 font-bengali text-xs text-stone-400">
              <div className="flex items-center gap-2 text-stone-300">
                <Clock className="w-4 h-4 text-primary-500" />
                <span>আড়ৎ খোলা থাকে</span>
              </div>
              <p className="pl-6">প্রতিদিন সকাল ৯টা — রাত ১০টা</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center font-bengali text-xs text-stone-500">
          <p>© ২০২৬ মেসার্স সোনালী ট্রেডার্স। সর্বস্বত্ব সংরক্ষিত। প্রসিদ্ধ চাউলের আড়ৎ — টঙ্গী, গাজীপুর</p>
        </div>
      </div>
    </footer>
  );
}
