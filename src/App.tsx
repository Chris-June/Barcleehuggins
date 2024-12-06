import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Features } from '@/components/sections/Features';
import { CTA } from '@/components/sections/CTA';
import { Videos } from '@/components/sections/Videos';
import { Blog } from '@/components/sections/Blog';
import { Pricing } from '@/components/sections/Pricing';
import { Footer } from '@/components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <CTA />
        <Videos />
        <Blog />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;