import { useState, type FormEvent } from 'react';
import { CheckCircle, Hash, Mail, MapPin, MessageCircle, Package, Phone, Plus, Send, Trash2, User } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

interface OrderItem {
  riceType: string;
  bagWeight: string;
  bagCount: string;
}

interface CustomerDetails {
  shopName: string;
  ownerName: string;
  phone: string;
  area: string;
  address: string;
  notes: string;
}

const emptyItem: OrderItem = { riceType: '', bagWeight: '', bagCount: '' };
const emptyCustomer: CustomerDetails = { shopName: '', ownerName: '', phone: '', area: '', address: '', notes: '' };
const fieldClassName = 'w-full font-bengali text-stone-800 bg-cream-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-400 focus:bg-white transition-colors';

export default function OrderPage() {
  const [customer, setCustomer] = useState<CustomerDetails>(emptyCustomer);
  const [items, setItems] = useState<OrderItem[]>([{ ...emptyItem }]);
  const [submitted, setSubmitted] = useState(false);

  const handleCustomerChange = (field: keyof CustomerDetails, value: string) => {
    setCustomer((previous) => ({ ...previous, [field]: value }));
  };

  const handleItemChange = (index: number, field: keyof OrderItem, value: string) => {
    setItems((previous) => previous.map((item, itemIndex) => itemIndex === index ? { ...item, [field]: value } : item));
  };

  const addItem = () => setItems((previous) => [...previous, { ...emptyItem }]);

  const removeItem = (index: number) => {
    setItems((previous) => previous.filter((_, itemIndex) => itemIndex !== index));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      'নতুন অর্ডার — মেসার্স সোনালী ট্রেডার্স',
      '------------------------',
      `দোকানের নাম: ${customer.shopName}`,
      `দোকানের মালিকের নাম: ${customer.ownerName}`,
      `ফোন: ${customer.phone}`,
      '',
      'পণ্যের তালিকা:',
      ...items.map((item, index) => `${index + 1}. ${item.riceType} — ${item.bagWeight} কেজির ${item.bagCount} বস্তা`),
      '',
      `এলাকা: ${customer.area}`,
      `ঠিকানা: ${customer.address}`,
    ];
    if (customer.notes) lines.push(`মন্তব্য: ${customer.notes}`);
    lines.push('', '(মেসার্স সোনালী ট্রেডার্স ওয়েবসাইট থেকে প্রেরিত)');
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(`https://wa.me/8801320395462?text=${buildWhatsAppMessage()}`, '_blank');
    setSubmitted(true);
  };

  const resetOrder = () => {
    setSubmitted(false);
    setCustomer({ ...emptyCustomer });
    setItems([{ ...emptyItem }]);
  };

  return (
    <>
      <PageHeader
        title="অনলাইনে চালের অর্ডার দিন"
        subtitle="দোকানের তথ্য, পণ্যের নাম, বস্তার ওজন ও বস্তার সংখ্যা লিখে অর্ডার পাঠান।"
        breadcrumb="অনলাইন অর্ডার"
        backgroundImage="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <section className="py-16 px-4 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-5 mb-8 flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-600" />
            </div>
            <p className="font-bengali text-stone-700 text-sm leading-relaxed">
              পাইকারি অর্ডারে পণ্যের ধরন, বস্তার ওজন, পরিমাণ ও এলাকাভেদে দাম ভিন্ন হয়। ফর্ম পাঠালে আমরা সঠিক রেট ও ডেলিভারির সময় জানিয়ে দেব।
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-stone-100 text-center">
              <div className="w-20 h-20 rounded-full bg-secondary-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-secondary-600" />
              </div>
              <h2 className="font-bengali text-2xl font-bold text-stone-800 mb-3">অর্ডার পাঠানো হয়েছে!</h2>
              <p className="font-bengali text-stone-600 mb-6 max-w-md mx-auto">
                হোয়াটসঅ্যাপে আপনার অর্ডারের তথ্য পাঠানো হয়েছে। আমরা শীঘ্রই রেট ও ডেলিভারির সময় জানিয়ে দেব।
              </p>
              <button onClick={resetOrder} className="bg-primary-600 hover:bg-primary-700 text-white font-bengali font-semibold px-6 py-3 rounded-xl shadow-md transition-all">
                নতুন অর্ডার দিন
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-stone-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-bengali text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1.5"><Package className="w-4 h-4 text-primary-500" />দোকানের নাম <span className="text-red-500">*</span></label>
                  <input type="text" required value={customer.shopName} onChange={(event) => handleCustomerChange('shopName', event.target.value)} placeholder="আপনার দোকানের নাম লিখুন" className={fieldClassName} />
                </div>
                <div>
                  <label className="font-bengali text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1.5"><User className="w-4 h-4 text-primary-500" />দোকানের মালিকের নাম <span className="text-red-500">*</span></label>
                  <input type="text" required value={customer.ownerName} onChange={(event) => handleCustomerChange('ownerName', event.target.value)} placeholder="দোকানের মালিকের নাম লিখুন" className={fieldClassName} />
                </div>
                <div>
                  <label className="font-bengali text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1.5"><Phone className="w-4 h-4 text-primary-500" />মোবাইল নম্বর <span className="text-red-500">*</span></label>
                  <input type="tel" required value={customer.phone} onChange={(event) => handleCustomerChange('phone', event.target.value)} placeholder="যেমন: ০১৩xxxxxxxx" className={fieldClassName} />
                </div>
              </div>

              <div className="mt-8 border-t border-stone-100 pt-7">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h2 className="font-bengali text-xl font-bold text-stone-800">পণ্যের তালিকা</h2>
                    <p className="font-bengali text-sm text-stone-500">প্রতিটি পণ্যের নাম, বস্তার ওজন ও সংখ্যা লিখুন</p>
                  </div>
                  <Package className="w-6 h-6 text-primary-600" />
                </div>

                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={index} className="rounded-2xl bg-cream-50 border border-stone-200 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bengali font-semibold text-stone-700">পণ্য {index + 1}</span>
                        {items.length > 1 && (
                          <button type="button" onClick={() => removeItem(index)} className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bengali text-sm">
                            <Trash2 className="w-4 h-4" /> বাদ দিন
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="font-bengali text-sm text-stone-600 mb-1.5 block">পণ্যের নাম <span className="text-red-500">*</span></label>
                          <input type="text" required value={item.riceType} onChange={(event) => handleItemChange(index, 'riceType', event.target.value)} placeholder="যেমন: মিনিকেট বা নাজিরশাইল" className={fieldClassName} />
                        </div>
                        <div>
                          <label className="font-bengali text-sm text-stone-600 mb-1.5 block">বস্তার ওজন <span className="text-red-500">*</span></label>
                          <select required value={item.bagWeight} onChange={(event) => handleItemChange(index, 'bagWeight', event.target.value)} className={fieldClassName}>
                            <option value="">ওজন নির্বাচন করুন</option>
                            <option value="৫০">৫০ কেজি</option>
                            <option value="২৫">২৫ কেজি</option>
                            <option value="১০">১০ কেজি</option>
                            <option value="১">১ কেজি</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-bengali text-sm text-stone-600 mb-1.5 block"><Hash className="w-4 h-4 inline mr-1 text-primary-500" />বস্তার সংখ্যা <span className="text-red-500">*</span></label>
                          <input type="number" min="1" required value={item.bagCount} onChange={(event) => handleItemChange(index, 'bagCount', event.target.value)} placeholder="যেমন: ৫" className={fieldClassName} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {items[items.length - 1].riceType && (
                  <button type="button" onClick={addItem} className="mt-4 inline-flex items-center gap-2 border border-primary-300 text-primary-700 hover:bg-primary-50 font-bengali font-semibold px-4 py-2.5 rounded-xl transition-colors">
                    <Plus className="w-5 h-5" />
                    পরের পণ্য যোগ করুন
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 border-t border-stone-100 pt-7">
                <div>
                  <label className="font-bengali text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary-500" />ডেলিভারি এলাকা <span className="text-red-500">*</span></label>
                  <input type="text" required value={customer.area} onChange={(event) => handleCustomerChange('area', event.target.value)} placeholder="যেমন: টঙ্গী, গাজীপুরা বা চেরাগআলী" className={fieldClassName} />
                </div>
                <div>
                  <label className="font-bengali text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary-500" />বিস্তারিত ঠিকানা <span className="text-red-500">*</span></label>
                  <input type="text" required value={customer.address} onChange={(event) => handleCustomerChange('address', event.target.value)} placeholder="দোকান/বাসার পূর্ণ ঠিকানা" className={fieldClassName} />
                </div>
              </div>

              <div className="mt-5">
                <label className="font-bengali text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1.5"><Mail className="w-4 h-4 text-primary-500" />অতিরিক্ত মন্তব্য (ঐচ্ছিক)</label>
                <textarea value={customer.notes} onChange={(event) => handleCustomerChange('notes', event.target.value)} rows={3} placeholder="ব্র্যান্ড পছন্দ, ডেলিভারির সময় বা অন্য কোনো বিশেষ অনুরোধ..." className={`${fieldClassName} resize-none`} />
              </div>

              <button type="submit" className="mt-7 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white font-bengali font-bold text-lg px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Send className="w-5 h-5" /> হোয়াটসঅ্যাপে অর্ডার পাঠান
              </button>
            </form>
          )}

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center"><Phone className="w-6 h-6 text-primary-600" /></div>
              <div><h3 className="font-bengali font-bold text-stone-800">সরাসরি কল করুন</h3><p className="font-bengali text-stone-500 text-sm mb-1">ফর্ম পূরণ না করে সরাসরি কথা বলতে চাইলে</p><a href="tel:01320395462" className="font-bengali text-primary-700 font-bold text-lg hover:text-primary-800 transition-colors">০১৩২০-৩৯৫৪৬২</a></div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center"><MapPin className="w-6 h-6 text-secondary-600" /></div>
              <div><h3 className="font-bengali font-bold text-stone-800">প্রধান শাখায় আসুন</h3><p className="font-bengali text-stone-500 text-sm">সমাজকল্যাণ রোড, আমির আলী মার্কেট, দত্তপাড়া, চেরাগআলী, টঙ্গী, গাজীপুর।</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
