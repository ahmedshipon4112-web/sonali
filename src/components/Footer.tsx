import { Phone, Mail, MapPin, Facebook, MessageCircle, Clock } from 'lucide-react';
import type { PageRoute } from '@/router';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks: { label: string; route: PageRoute }[] = [
    { label: 'হোম', route: 'home' },
    { label: 'চালের তালিকা', route: 'products' },
    { label: 'পাইকারি সরবরাহ', route: 'wholesale' },
    { label: 'অনলাইন অর্ডার', route: 'order' },
    { label: 'আমাদের সম্পর্কে', route: 'about' },
    { label: 'যোগাযোগ ও শাখা', route: 'contact' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-14 h-12 rounded-lg bg-white flex items-center justify-center shadow-md overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}image.png`}
                  alt="সোনালী ট্রেডার্স লোগো"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-bengali font-bold text-white text-lg">মেসার্স সোনালী ট্রেডার্স</h3>
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
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => onNavigate(link.route)}
                    className="font-bengali text-sm text-stone-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bengali font-semibold text-white mb-4">যোগাযোগ</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:01320395462" className="flex items-center gap-2 font-bengali text-sm text-stone-400 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  ০১৩২০-৩৯৫৪৬২
                </a>
              </li>
              <li>
                <a href="mailto:sonalitradersrice@gmail.com" className="flex items-center gap-2 font-bengali text-sm text-stone-400 hover:text-primary-400 transition-colors break-all">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  sonalitradersrice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 font-bengali text-sm text-stone-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                সমাজকল্যাণ রোড, আমির আলী মার্কেট, দত্তপাড়া, চেরাগআলী, টঙ্গী, গাজীপুর।
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bengali font-semibold text-white mb-4">আমাদের ফলো করুন</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/19y85MzVms/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-stone-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-stone-300" />
              </a>
              <a
                href="https://wa.me/8801320395462"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-stone-800 hover:bg-secondary-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-stone-300" />
              </a>
              <a
                href="tel:01320395462"
                className="w-11 h-11 rounded-xl bg-stone-800 hover:bg-accent-600 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5 text-stone-300" />
              </a>
            </div>
            <div className="mt-6 bg-stone-800 rounded-xl p-4">
              <p className="font-bengali text-xs text-stone-400 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> আড়ৎ খোলা থাকে
              </p>
              <p className="font-bengali text-sm text-white font-medium">প্রতিদিন সকাল ৯টা — রাত ১০টা</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 pt-6 text-center">
          <p className="font-bengali text-sm text-stone-500">
            &copy; ২০২৬ মেসার্স সোনালী ট্রেডার্স। সর্বস্বত্ব সংরক্ষিত।
            <span className="block sm:inline sm:ml-1">প্রসিদ্ধ চাউলের আড়ৎ — টঙ্গী, গাজীপুর</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
