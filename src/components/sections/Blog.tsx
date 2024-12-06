import { Card } from '@/components/ui/card';

export function Blog() {
  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">
          Yoga & Wellness Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden relative bg-gradient-to-br from-primary-900/90 to-primary-950/90 dark:from-primary-800/90 dark:to-primary-900/90">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
              alt="Meditation Tips"
              className="w-full h-48 object-cover opacity-80"
            />
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                5 Meditation Tips for Beginners
              </h3>
              <p className="text-white/80">
                Start your meditation journey with these simple yet effective techniques.
              </p>
            </div>
          </Card>
          <Card className="overflow-hidden relative bg-gradient-to-br from-accent-900/90 to-accent-950/90 dark:from-accent-800/90 dark:to-accent-900/90">
            <img
              src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80"
              alt="Yoga Benefits"
              className="w-full h-48 object-cover opacity-80"
            />
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                The Benefits of Morning Yoga
              </h3>
              <p className="text-white/80">
                Discover why morning yoga can transform your entire day.
              </p>
            </div>
          </Card>
          <Card className="overflow-hidden relative bg-gradient-to-br from-primary-800/90 to-accent-900/90 dark:from-primary-700/90 dark:to-accent-800/90">
            <img
              src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&q=80"
              alt="Breathing Exercises"
              className="w-full h-48 object-cover opacity-80"
            />
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                Essential Breathing Exercises
              </h3>
              <p className="text-white/80">
                Learn powerful breathing techniques for stress relief.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}