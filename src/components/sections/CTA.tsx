import { ContactModal } from '@/components/modals/ContactModal';

export function CTA() {
  return (
    <section className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif mb-6">
          Begin Your Yoga Journey Today
        </h2>
        <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
          Transform your life with our specially curated yoga programs.
          Start with a free consultation session.
        </p>
        <ContactModal variant="secondary" />
      </div>
    </section>
  );
}