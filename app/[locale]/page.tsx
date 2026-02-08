import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Placeholder sections for navigation */}
      <div id="about" className="h-96 bg-cream flex items-center justify-center">
        <h2 className="font-heading text-2xl text-forest-green">Chi siamo section - Coming next</h2>
      </div>
      <div id="services" className="h-96 bg-white flex items-center justify-center">
        <h2 className="font-heading text-2xl text-forest-green">Services section - Coming next</h2>
      </div>
      <div id="portfolio" className="h-96 bg-cream flex items-center justify-center">
        <h2 className="font-heading text-2xl text-forest-green">Portfolio section - Coming next</h2>
      </div>
      <div id="contact" className="h-96 bg-white flex items-center justify-center">
        <h2 className="font-heading text-2xl text-forest-green">Contact section - Coming next</h2>
      </div>
    </div>
  );
}
