import { Button } from '@/components/ui/button';
import { AboutModal } from '@/components/modals/AboutModal';

export function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl" />
            <img
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80"
              alt="Barclee Huggins"
              className="rounded-2xl shadow-lg relative"
            />
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100/50 to-accent-100/50 dark:from-primary-950/50 dark:to-accent-950/50 rounded-2xl -z-10 blur-xl" />
            <h2 className="text-4xl font-serif mb-6">
              Meet Barclee Huggins
            </h2>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience in yoga practice and teaching,
              I'm dedicated to helping women find their path to inner peace
              and physical well-being through mindful movement and breath work.
            </p>
            <p className="text-muted-foreground mb-8">
              My approach combines traditional yoga principles with modern
              wellness practices, creating a unique experience that nurtures
              both body and soul.
            </p>
            <AboutModal />
          </div>
        </div>
      </div>
    </section>
  );
}