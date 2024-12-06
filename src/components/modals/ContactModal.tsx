import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ContactForm } from '@/components/forms/ContactForm';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  variant?: "default" | "secondary" | "outline";
}

export function ContactModal({ variant = "default" }: ContactModalProps) {
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Consultation Request Received",
      description: "We'll be in touch soon!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant={variant}>Start Your Journey</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50 dark:from-primary-950/50 dark:to-accent-950/50 rounded-lg -z-10" />
        <DialogHeader>
          <DialogTitle>🎉 Congratulations on Your First Step!</DialogTitle>
          <DialogDescription>
            You're about to begin a transformative journey towards better health,
            balance, and inner peace. Fill out the form below and we'll contact
            you to schedule your free consultation session.
          </DialogDescription>
        </DialogHeader>
        <ContactForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}