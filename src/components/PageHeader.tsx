import { Wheat } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb, backgroundImage }: PageHeaderProps) {
  const bgImage = backgroundImage || 'https://images.pexels.com/photos/236474/pexels-photo-236474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/75 to-stone-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-primary-400 mb-4 animate-fade-in-up">
          <Wheat className="w-5 h-5" />
          <span className="font-bengali text-sm font-medium tracking-wide">{breadcrumb}</span>
        </div>
        <h1 className="font-bengali text-4xl sm:text-5xl font-bold text-white leading-tight mb-3 animate-fade-in-up animate-delay-100">
          {title}
        </h1>
        <p className="font-bengali text-lg text-stone-200 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-200">
          {subtitle}
        </p>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-[50px] sm:h-[70px]">
          <path d="M0 100V40C240 80 480 0 720 20C960 40 1200 90 1440 60V100H0Z" fill="#fdfbf7" />
        </svg>
      </div>
    </section>
  );
}
