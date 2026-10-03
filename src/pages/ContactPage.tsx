import { Phone, MessageCircle, Facebook, Mail, MapPin, Clock, Store, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { branches } from '@/data';
import type { PageRoute } from '@/router';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <>
      <PageHeader
        title="যোগাযোগ ও শাখা"
        subtitle="সরাসরি আড়তে এসে চাল পরখ করে নেওয়া বা বুকিংয়ের বিস্তারিত তথ্য।"
        breadcrumb="যোগাযোগ ও শাখা"
        backgroundImage="https://images.pexels.com/photos/21958122/pexels-photo-21958122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <section className="py-16 px-4 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          {/* Hotline CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 sm:p-10 mb-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h2 className="font-bengali text-white font-bold text-2xl mb-2">উভয় শাখার প্রধান হটলাইন</h2>
                <p className="font-bengali text-primary-100">যেকোনো তথ্য ও সরাসরি চালের অর্ডারের জন্য সার্বক্ষণিক চালু রয়েছে</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:01320395462" className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bengali font-bold text-lg px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  <Phone className="w-5 h-5" />
                  ০১৩২০-৩৯৫৪৬২
                </a>
                <a href="https://wa.me/8801320395462" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 text-white font-bengali font-semibold px-6 py-3.5 rounded-xl hover:bg-white/25 transition-all">
                  <MessageCircle className="w-5 h-5" />
                  হোয়াটসঅ্যাপ
                </a>
              </div>
            </div>
          </div>

          {/* Marketing manager */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-10 flex items-center gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center">
              <Phone className="w-7 h-7 text-accent-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bengali font-bold text-lg text-stone-800">মার্কেটিং ম্যানেজার</h3>
              <p className="font-bengali text-stone-500 text-sm mb-1">পাইকারি ডিলারশিপ, বড় লটের সাপ্লাই চুক্তি ও করপোরেট সাপ্লাইয়ের জন্য যোগাযোগ করুন</p>
              <a href="tel:01320395464" className="font-bengali text-accent-700 font-bold text-lg hover:text-accent-800 transition-colors">
                ০১৩২০-৩৯৫৪৬৪
              </a>
            </div>
          </div>

          {/* Branches */}
          <h2 className="font-bengali text-2xl font-bold text-stone-800 mb-6">আমাদের শাখাসমূহ</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow border border-stone-100">
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
                  <a href={`tel:${branch.phone}`} className="flex items-center gap-2 font-bengali text-stone-700 hover:text-primary-700 transition-colors">
                    <Phone className="w-4 h-4 text-primary-500" />
                    {branch.phone} <span className="text-xs text-stone-400">(প্রধান)</span>
                  </a>
                  {branch.phone2 && (
                    <a href={`tel:${branch.phone2}`} className="flex items-center gap-2 font-bengali text-stone-700 hover:text-primary-700 transition-colors">
                      <Phone className="w-4 h-4 text-stone-400" />
                      {branch.phone2}
                    </a>
                  )}
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-secondary-600 hover:text-secondary-700 font-bengali text-sm font-medium mt-2">
                    <MapPin className="w-4 h-4" />
                    গুগল ম্যাপে দেখুন
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Email + Social */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bengali font-bold text-stone-800 mb-1">ইমেইল</h3>
              <p className="font-bengali text-stone-500 text-sm mb-2">বাণিজ্যিক প্রস্তাবের জন্য</p>
              <a href="mailto:sonalitradersrice@gmail.com" className="font-bengali text-primary-700 text-sm break-all hover:text-primary-800 transition-colors">
                sonalitradersrice@gmail.com
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                <Facebook className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bengali font-bold text-stone-800 mb-1">ফেসবুক</h3>
              <p className="font-bengali text-stone-500 text-sm mb-2">আমাদের ফেসবুক পেজ</p>
              <a href="https://www.facebook.com/share/19y85MzVms/" target="_blank" rel="noopener noreferrer" className="font-bengali text-blue-600 text-sm hover:text-blue-700 transition-colors">
                পেজে যান
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="font-bengali font-bold text-stone-800 mb-1">হোয়াটসঅ্যাপ</h3>
              <p className="font-bengali text-stone-500 text-sm mb-2">সরাসরি মেসেজ দিন</p>
              <a href="https://wa.me/8801320395462" target="_blank" rel="noopener noreferrer" className="font-bengali text-secondary-600 text-sm hover:text-secondary-700 transition-colors">
                মেসেজ পাঠান
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary-600 flex-shrink-0" />
              <p className="font-bengali text-stone-700 text-center md:text-left">
                <strong>আড়ৎ খোলা থাকার সময়:</strong> প্রতিদিন সকাল ৯:০০ টা থেকে রাত ১০:০০ টা পর্যন্ত।<br/>
                <span className="text-stone-500">যেকোনো জরুরি সহায়তায় সরাসরি ফোনে যোগাযোগ করুন।</span>
              </p>
            </div>
            <button onClick={() => onNavigate('order')} className="bg-primary-600 hover:bg-primary-700 text-white font-bengali font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap flex items-center gap-2">
              অনলাইনে অর্ডার করুন
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
