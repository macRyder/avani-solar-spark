
import React from 'react';
import { Check, Wrench, Sun, Phone, Clock, Monitor } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Check,
      title: '100% Custom Installation Plans',
      description: 'Tailored solutions designed specifically for your property and energy needs'
    },
    {
      icon: Sun,
      title: 'Best-in-Class Solar Equipment',
      description: 'Premium quality panels and inverters from trusted global manufacturers'
    },
    {
      icon: Monitor,
      title: 'Affordable Pricing',
      description: 'Competitive rates with flexible financing options and maximum ROI'
    },
    {
      icon: Phone,
      title: 'Local Support & Maintenance',
      description: '24/7 customer support with regular maintenance and monitoring services'
    },
    {
      icon: Clock,
      title: '10+ Years Industry Experience',
      description: 'Proven track record with hundreds of successful installations across Rajasthan'
    },
    {
      icon: Wrench,
      title: 'End-to-End Service',
      description: 'From consultation to installation to maintenance - we handle it all'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-solar-blue mb-4">Why Choose Avani Solar?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive solar solutions and exceptional customer service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-solar-orange animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-solar-orange bg-opacity-10 rounded-lg mr-4">
                  <feature.icon className="h-6 w-6 text-solar-orange" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
