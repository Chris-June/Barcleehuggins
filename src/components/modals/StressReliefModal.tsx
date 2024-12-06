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
import { Wind, Cloud, Sun, Moon } from 'lucide-react';

export function StressReliefModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Stress Relief Techniques</DialogTitle>
          <DialogDescription>
            Learn powerful methods to manage stress and anxiety
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Wind className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Breathing Techniques</h3>
                <p className="text-neutral-600">
                  Master pranayama breathing exercises that activate your body's relaxation response. Learn specific techniques for different situations and stress triggers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Cloud className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Relaxation Practices</h3>
                <p className="text-neutral-600">
                  Discover guided relaxation methods, including progressive muscle relaxation and yoga nidra, for deep stress relief and improved sleep quality.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Sun className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Mindful Movement</h3>
                <p className="text-neutral-600">
                  Learn gentle yoga sequences designed specifically for stress relief, combining movement with breath awareness for maximum benefit.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Moon className="w-6 h-6 text-neutral-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Evening Rituals</h3>
                <p className="text-neutral-600">
                  Create calming evening routines that help you unwind and prepare for restful sleep, reducing accumulated stress from your day.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}