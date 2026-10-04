import { Phone, MessageCircle, Facebook, Mail, MapPin, Clock, Store } from 'lucide-react';
import { branches } from '@/data';
import type { PageRoute } from '@/router';

interface ContactProps {
  onNavigate: (route: PageRoute) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-bengali text-primary-600 font-semibold text-sm tracking-wide uppercase mb-2">
            যোগাযোগ
          </span>
          <h2 className="font-bengali text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="font-bengali text-stone-600 text-lg leading-relaxed">
            সরাসরি আড়তে এসে চাল পরখ করে নেওয়া বা বুকিংয়ের বিস্তারিত তথ্য।
          </p>
        </div>

        {/* Hotline CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 sm:p-10 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-bengali text-white font-bold text-2xl mb-2">
                উভয় শাখার প্রধান হটলাইন
              </h3>
              <p className="font-bengali text-primary-100">
                যেকোনো তথ্য ও সরাসরি চালের অর্ডারের জন্য সার্বক্ষণিক চালু রয়েছে
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:01320395462"
                className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bengali font-bold text-lg px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                ০১৩২০-৩৯৫৪৬২
              </a>
              <a
                href="https://wa.me/8801320395462"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 text-white font-bengali font-semibold px-6 py-3.5 rounded-xl hover:bg-white/25 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                হোয়াটসঅ্যাপ
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/share/19B9g5cXhD/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary-100 hover:text-white font-bengali text-sm transition-colors"
            >
              <Facebook className="w-4 h-4" /> ফেসবুক পেজ
            </a>
            <span className="text-white/30">|</span>
            <a
              href="mailto:sonalitradersrice@gmail.com"
              className="flex items-center gap-1.5 text-primary-100 hover:text-white font-bengali text-sm transition-colors"
            >
              <Mail className="w-4 h-4" /> sonalitradersrice@gmail.com
            </a>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1.5 text-primary-100 font-bengali text-sm">
              <Phone className="w-4 h-4" /> মার্কেটিং: ০১৩২০-৩৯৫৪৬৪
            </span>
          </div>
        </div>

        {/* Branches */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {branches.map((branch, index) => {
            // ইউনিট-০১ এবং ইউনিট-০২ এর জন্য সঠিক গুগল ম্যাপ লিঙ্ক নির্ধারণ
            const mapLink =
              index === 0
                ? 'https://maps.app.goo.gl/qCWHGSC7UuZTHe728?g_st=aw'
                : 'https://maps.app.goo.gl/2wm3tYqZpmE8n3Yv7';

            return (
              <div
                key={branch.id}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow border border-stone-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Store className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bengali font-bold text-lg text-stone-800">{branch.name}</h3>
                    <p className="font-bengali text-stone-500 text-sm flex items-start gap-1.5 mt-1.5">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-500" />
                      {branch.address}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 ml-16">
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex items-center gap-2 font-bengali text-stone-700 hover:text-primary-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary-500" />
                    {branch.phone} <span className="text-xs text-stone-400">(প্রধান)</span>
                  </a>
                  {branch.phone2 && (
                    <a
                      href={`tel:${branch.phone2}`}
                      className="flex items-center gap-2 font-bengali text-stone-700 hover:text-primary-700 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-stone-400" />
                      {branch.phone2}
                    </a>
                  )}
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-secondary-600 hover:text-secondary-700 font-bengali text-sm font-medium mt-2"
                  >
                    <MapPin className="w-4 h-4" />
                    গুগল ম্যাপে দেখুন
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hours + CTA */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary-600 flex-shrink-0" />
            <p className="font-bengali text-stone-700 text-center md:text-left">
              <strong>আড়ৎ খোলা থাকার সময়:</strong> প্রতিদিন সকাল ৯:০০ টা থেকে রাত ১০:০০ টা পর্যন্ত।
            </p>
          </div>
          <button
            onClick={() => onNavigate('order')}
            className="bg-primary-600 hover:bg-primary-700 text-white font-bengali font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            অনলাইনে অর্ডার করুন
          </button>
        </div>
      </div>
    </section>
  );
}
