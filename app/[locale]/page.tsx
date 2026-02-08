import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Placeholder sections for navigation */}
      <div id="portfolio" className="h-96 bg-cream flex items-center justify-center">
        <h2 className="font-heading text-2xl text-forest-green">Portfolio section - Coming next</h2>
      </div>
      <div id="contact" className="h-96 bg-white flex items-center justify-center">
        <h2 className="font-heading text-2xl text-forest-green">Contact section - Coming next</h2>
      </div>
    </div>
  );
}
