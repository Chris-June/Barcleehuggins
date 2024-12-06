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
import { Activity, Heart, Flame, Dumbbell } from 'lucide-react';

export function PhysicalWellnessModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Physical Wellness Through Yoga</DialogTitle>
          <DialogDescription>
            Transform your body with mindful movement practices
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Activity className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Improved Flexibility</h3>
                <p className="text-neutral-600">
                  Gradually enhance your range of motion through gentle, progressive stretching. Our approach ensures safe and sustainable flexibility development suitable for all levels.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Dumbbell className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Strength Building</h3>
                <p className="text-neutral-600">
                  Build functional strength through bodyweight exercises and yoga poses. Develop core stability and overall muscle tone while maintaining joint health.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Heart className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Cardiovascular Health</h3>
                <p className="text-neutral-600">
                  Enhance circulation and heart health through dynamic sequences and flow-based practices that get your blood pumping while remaining low-impact.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Flame className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Energy Boost</h3>
                <p className="text-neutral-600">
                  Experience increased vitality through practices that balance effort and rest, helping you maintain sustainable energy levels throughout your day.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}