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
import { Heart, Moon, Brain, Sparkles } from 'lucide-react';

export function InnerPeaceModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Finding Inner Peace</DialogTitle>
          <DialogDescription>
            Discover the path to tranquility and mental clarity
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Moon className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Meditation Practices</h3>
                <p className="text-neutral-600">
                  Learn various meditation techniques that help quiet the mind and cultivate inner stillness. From guided visualizations to mindfulness practices, discover methods that resonate with your personal journey.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Brain className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Mental Clarity</h3>
                <p className="text-neutral-600">
                  Develop techniques to reduce mental clutter and enhance focus. Our practices help you maintain clarity and presence throughout your daily activities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Heart className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Emotional Balance</h3>
                <p className="text-neutral-600">
                  Learn to observe and understand your emotions without being overwhelmed by them. Develop a more balanced and peaceful relationship with your emotional life.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Sparkles className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Daily Integration</h3>
                <p className="text-neutral-600">
                  Discover practical ways to incorporate peace-promoting practices into your daily routine, creating lasting positive changes in your life.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}