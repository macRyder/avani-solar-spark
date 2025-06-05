
import React from 'react';

const PartnersSection = () => {
  const partners = [
    { 
      name: 'Luminous Solar', 
      logo: '/lovable-uploads/57f5d985-a843-4a44-b3f1-12d05c78958f.png'
    },
    { 
      name: 'Waaree Solar', 
      logo: '/lovable-uploads/df365f8c-a510-4ec9-ad11-3a50c7981edf.png'
    },
    { 
      name: 'Adani Solar', 
      logo: '/lovable-uploads/4c2aa05d-4dd4-426d-baa0-b6961092500c.png'
    },
  ];

  return (
    <section className="py-16 bg-solar-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-solar-blue mb-4">Our Trusted Partners</h2>
        <p className="text-lg text-gray-600 mb-4">
          We work with industry-leading partners to bring you the most efficient and reliable solar panels
        </p>
        <div className="bg-solar-orange text-white inline-block px-4 py-2 rounded-lg font-semibold mb-8">
          Major Brands
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <p className="text-lg font-semibold text-solar-blue">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
