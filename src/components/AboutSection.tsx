
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-solar-blue mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Avani Solar, we provide reliable and sustainable solar energy solutions tailored to your 
              residential, commercial, or industrial needs. Based in the heart of Kota, we're committed to 
              making solar energy accessible and affordable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of certified professionals brings years of experience in solar installation, 
              maintenance, and consultation. We believe in powering your future with clean, 
              renewable energy that not only reduces your electricity bills but also contributes 
              to a sustainable environment.
            </p>
          </div>

          {/* Image */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Solar Panel Installation"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
