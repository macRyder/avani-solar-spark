
import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919783155554', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919783155554';
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(30, 64, 175, 0.7)), url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Invest in a <span className="text-solar-orange">Brighter Future</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Leading Solar Solutions in Kota, Rajasthan
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={handleWhatsApp}
            className="bg-solar-orange hover:bg-solar-orange-dark text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get a Free Quote
          </Button>
          <Button 
            onClick={handleCall}
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>+91-97831-55554 | +91-99833-21552</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>20-C Shopping Center, Kota, Rajasthan 324007</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
