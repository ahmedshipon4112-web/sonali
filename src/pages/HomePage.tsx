import Hero from '@/components/Hero';
import DeliveryBanner from '@/components/DeliveryBanner';
import HomeHighlights from '@/components/HomeHighlights';
import AboutSection from '@/components/About';
import ContactSection from '@/components/Contact';
import PartnerBrands from '@/components/PartnerBrands';
import type { PageRoute } from '@/router';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <DeliveryBanner />
      <HomeHighlights onNavigate={onNavigate} />
      <PartnerBrands onNavigate={onNavigate} />
      <AboutSection onNavigate={onNavigate} />
      <ContactSection onNavigate={onNavigate} />
    </>
  );
}
