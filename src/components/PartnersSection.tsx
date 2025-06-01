
import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'Luminous Solar', logo: '/api/placeholder/150/80' },
    { name: 'Waaree Solar', logo: '/api/placeholder/150/80' },
    { name: 'Adani Solar', logo: '/api/placeholder/150/80' },
  ];

  return (
    <section className="py-16 bg-solar-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-solar-blue mb-4">Our Trusted Partners</h2>
        <p className="text-lg text-gray-600 mb-12">
          We work with industry-leading partners to bring you the most efficient and reliable solar panels
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-16 flex items-center justify-center">
                <span className="text-xl font-semibold text-solar-blue">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
