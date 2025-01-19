import { Card } from '@/components/ui/card';
import { ContactModal } from '@/components/modals/ContactModal';

export function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">
          Class Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 relative overflow-hidden bg-gradient-to-br from-primary-900/90 to-primary-950/90 dark:from-primary-800/90 dark:to-primary-900/90 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-4">Starter</h3>
              <div className="text-4xl font-serif mb-6">$89<span className="text-lg">/month</span></div>
              <ul className="space-y-4 mb-8 text-white/80">
                <li>2 Classes per week</li>
                <li>Basic pose guidance</li>
                <li>Community support</li>
              </ul>
              <ContactModal variant="default" />
            </div>
          </Card>
          <Card className="p-8 relative overflow-hidden bg-gradient-to-br from-accent-900/90 to-accent-950/90 dark:from-accent-800/90 dark:to-accent-900/90 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            <div className="absolute -top-4 right-4 z-10">
              <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                Popular
              </span>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <div className="text-4xl font-serif mb-6">$149<span className="text-lg">/month</span></div>
              <ul className="space-y-4 mb-8 text-white/80">
                <li>Unlimited classes</li>
                <li>1-on-1 sessions</li>
                <li>Nutrition guidance</li>
                <li>Priority booking</li>
              </ul>
              <ContactModal variant="default" />
            </div>
          </Card>
          <Card className="p-8 relative overflow-hidden bg-gradient-to-br from-primary-800/90 to-accent-900/90 dark:from-primary-700/90 dark:to-accent-800/90 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-4">Private</h3>
              <div className="text-4xl font-serif mb-6">$299<span className="text-lg">/month</span></div>
              <ul className="space-y-4 mb-8 text-white/80">
                <li>4 private sessions</li>
                <li>Personalized program</li>
                <li>Video consultations</li>
                <li>24/7 support</li>
              </ul>
              <ContactModal variant="default" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}