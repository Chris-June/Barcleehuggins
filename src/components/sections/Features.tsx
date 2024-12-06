import { Card } from '@/components/ui/card';
import { InnerPeaceModal } from '@/components/modals/InnerPeaceModal';
import { PhysicalWellnessModal } from '@/components/modals/PhysicalWellnessModal';
import { StressReliefModal } from '@/components/modals/StressReliefModal';

export function Features() {
  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">
          Transform Your Life Through Yoga
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 relative overflow-hidden bg-gradient-to-br from-primary-900/90 to-primary-950/90 dark:from-primary-800/90 dark:to-primary-900/90 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            <div className="relative">
              <h3 className="text-xl font-semibold mb-4">Inner Peace</h3>
              <p className="text-white/80">
                Find tranquility and mental clarity through guided meditation
                and mindful movement practices.
              </p>
              <div className="mt-4">
                <InnerPeaceModal />
              </div>
            </div>
          </Card>
          <Card className="p-6 relative overflow-hidden bg-gradient-to-br from-accent-900/90 to-accent-950/90 dark:from-accent-800/90 dark:to-accent-900/90 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            <div className="relative">
              <h3 className="text-xl font-semibold mb-4">Physical Wellness</h3>
              <p className="text-white/80">
                Improve flexibility, strength, and circulation through carefully
                designed yoga sequences.
              </p>
              <div className="mt-4">
                <PhysicalWellnessModal />
              </div>
            </div>
          </Card>
          <Card className="p-6 relative overflow-hidden bg-gradient-to-br from-primary-800/90 to-accent-900/90 dark:from-primary-700/90 dark:to-accent-800/90 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            <div className="relative">
              <h3 className="text-xl font-semibold mb-4">Stress Relief</h3>
              <p className="text-white/80">
                Learn techniques to manage stress and anxiety in your daily life.
              </p>
              <div className="mt-4">
                <StressReliefModal />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}