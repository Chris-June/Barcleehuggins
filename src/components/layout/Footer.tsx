import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Barclee Huggins</h3>
            <p className="mb-4">Transforming lives through the power of yoga.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Instagram /></a>
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#classes" className="hover:text-white">Classes</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>123 Yoga Street</li>
              <li>Serenity City, SC 12345</li>
              <li>contact@barcleehuggins.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe for yoga tips and special offers.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 mb-2"
            />
            <Button variant="secondary" className="w-full">Subscribe</Button>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Barclee Huggins Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}