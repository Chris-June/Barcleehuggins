import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Heart, Flower2, Wind, Waves } from 'lucide-react';

export function AboutModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50 dark:from-primary-950/50 dark:to-accent-950/50 rounded-lg -z-10" />
        <DialogHeader>
          <DialogTitle>About Yoga Studio</DialogTitle>
          <DialogDescription>
            My journey in yoga and dedication to helping others find peace
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Flower2 className="w-6 h-6 text-primary-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">The Beginning</h3>
                <p className="text-muted-foreground">
                  My yoga journey began over 15 years ago during a particularly stressful period in my corporate career. What started as a way to find balance quickly became my passion and calling. Through dedicated practice and study, I discovered the transformative power of yoga not just for physical well-being, but for mental and spiritual growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Heart className="w-6 h-6 text-accent-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">My Teaching Philosophy</h3>
                <p className="text-muted-foreground">
                  I believe in making yoga accessible to everyone, regardless of age, flexibility, or experience level. My classes focus on mindful movement, proper alignment, and the integration of breath work. I create a supportive, non-judgmental environment where each student can explore their practice at their own pace.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Wind className="w-6 h-6 text-primary-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Specialized Training</h3>
                <p className="text-muted-foreground">
                  Beyond my 500-hour Yoga Alliance certification, I've completed specialized training in prenatal yoga, restorative practices, and therapeutic applications. I regularly attend workshops and retreats to deepen my knowledge and bring fresh perspectives to my teaching.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Waves className="w-6 h-6 text-accent-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">My Mission</h3>
                <p className="text-muted-foreground">
                  My mission is to help women discover their inner strength and peace through yoga. I'm particularly passionate about supporting those dealing with stress, anxiety, and life transitions. Through our practice together, we'll work on building not just physical strength and flexibility, but also emotional resilience and mental clarity.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}