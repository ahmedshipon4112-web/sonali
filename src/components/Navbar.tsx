import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import type { PageRoute } from '@/router';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const navLinks: { label: string; route: PageRoute }[] = [
  { label: 'হোম', route: 'home' },
  { label: 'চালের তালিকা', route: 'products' },
  { label: 'পাইকারি সরবরাহ', route: 'wholesale' },
  { label: 'অনলাইন অর্ডার', route: 'order' },
  { label: 'যোগাযোগ ও শাখা', route: 'contact' },
  { label: 'আমাদের সম্পর্কে', route: 'about' },
];

export default function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-800 text-cream-50 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p className="font-bengali">প্রসিদ্ধ চাউলের আড়ৎ — টঙ্গী, গাজীপুর</p>
          <div className="flex items-center gap-4">
            <a href="mailto:sonalitradersrice@gmail.com" className="font-bengali hover:text-primary-200 transition-colors">
              sonalitradersrice@gmail.com
            </a>
            <a
              href="tel:01320395462"
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors font-bengali"
            >
              <Phone className="w-3.5 h-3.5" />
              হটলাইন: ০১৩২০-৩৯৫৪৬২
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-cream-50/90 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo Section (বড় ও নতুন ডিজাইনে পরিবর্তন করা হয়েছে) */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}logo.jpeg`}
                alt="সোনালী ট্রেডার্স লোগো"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-left">
              <h1 className="font-bengali font-bold text-primary-800 text-xl leading-tight">
                মেসার্স সোনালী ট্রেডার্স
              </h1>
              <p className="font-bengali text-xs sm:text-sm text-stone-500">প্রসিদ্ধ চাউলের আড়ৎ</p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`font-bengali px-4 py-2 rounded-lg transition-all text-[15px] font-medium ${
                  currentRoute === link.route
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-stone-700 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:01320395462"
            className="hidden lg:flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bengali font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            অর্ডার করুন
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
            aria-label="মেনু"
          >
            {mobileOpen ? <X className="w-6 h-6 text-stone-700" /> : <Menu className="w-6 h-6 text-stone-700" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-cream-50 shadow-xl border-t border-primary-100 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`font-bengali text-left px-4 py-3 rounded-lg transition-all font-medium ${
                    currentRoute === link.route
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-stone-700 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:01320395462"
                className="flex items-center justify-center gap-2 bg-primary-600 text-white font-bengali font-semibold px-5 py-3 rounded-xl mt-2"
              >
                <Phone className="w-4 h-4" />
                হটলাইন: ০১৩২০-৩৯৫৪৬২
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
