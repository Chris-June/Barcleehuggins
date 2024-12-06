import { ContactModal } from '@/components/modals/ContactModal';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Find Your Inner Peace Through Yoga
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join me on a journey to discover balance, strength, and tranquility
            through mindful movement and breath work.
          </p>
          <div className="space-x-4">
            <ContactModal />
          </div>
        </div>
      </div>
    </section>
  );
}