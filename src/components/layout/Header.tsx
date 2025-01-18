import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/modals/ContactModal';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif">Yoga Studio</div>
          
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Button variant="ghost">Classes</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost">Schedule</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <ContactModal>
                    <Button variant="outline">Contact</Button>
                  </ContactModal>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ContactModal>
              <Button variant="outline">Contact</Button>
            </ContactModal>
            <ThemeToggle />
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#classes" className="text-muted-foreground hover:text-foreground transition-colors">Classes</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <div className="flex items-center space-x-4 pt-4">
                <ContactModal>
                  <Button variant="outline">Contact</Button>
                </ContactModal>
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}