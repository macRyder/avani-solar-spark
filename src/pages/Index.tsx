
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
};

export default Index;
