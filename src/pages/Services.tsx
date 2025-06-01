
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Plug, Factory, Wrench, Lightbulb, Sun, Package, Chart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Plug,
      title: 'Residential Solar Installation',
      description: 'Tailored rooftop solutions to power your home efficiently with premium solar panels and inverters.'
    },
    {
      icon: Factory,
      title: 'Commercial & Industrial Solar Projects',
      description: 'Customized systems for offices, shops, warehouses & factories with scalable energy solutions.'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Regular check-ups, panel cleaning, inverter servicing, and 24/7 technical support.'
    },
    {
      icon: Chart,
      title: 'Consultation & Design',
      description: 'Energy assessment, feasibility studies, ROI planning, and custom system design.'
    },
    {
      icon: Lightbulb,
      title: 'Net Metering Assistance',
      description: 'End-to-end support for grid connection, approvals, and government subsidy applications.'
    },
    {
      icon: Package,
      title: 'Battery Backup & Inverters',
      description: 'Smart energy storage solutions for 24x7 power availability and backup systems.'
    }
  ];

  const projects = [
    {
      location: 'Kota Residential',
      size: '5kW System',
      savings: '₹8,000/month savings'
    },
    {
      location: 'Bundi Commercial',
      size: '25kW System',
      savings: '₹35,000/month savings'
    },
    {
      location: 'Baran Industrial',
      size: '100kW System',
      savings: '₹1,20,000/month savings'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      rating: 5,
      comment: 'Excellent service and professional installation. My electricity bill reduced by 80%!'
    },
    {
      name: 'Priya Gupta',
      rating: 5,
      comment: 'Amazing team! They handled everything from design to government approvals seamlessly.'
    },
    {
      name: 'Vikram Singh',
      rating: 5,
      comment: 'Best solar company in Kota. Quality products and great after-sales support.'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/919783155554', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-solar-blue to-solar-blue-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Services</h1>
          <p className="text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive Solar Solutions in Kota
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-solar-orange animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-solar-orange bg-opacity-10 rounded-lg w-fit mb-4">
                  <service.icon className="h-8 w-8 text-solar-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-solar-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-solar-blue text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.location}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-solar-blue to-solar-orange rounded-lg mb-4 flex items-center justify-center">
                  <Sun className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.location}</h3>
                <p className="text-gray-600 mb-1">{project.size}</p>
                <p className="text-solar-orange font-medium">{project.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-solar-blue text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="p-6 border border-gray-200 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-solar-orange">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-solar-blue to-solar-blue-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Looking to switch to solar?</h2>
          <p className="text-xl mb-8">Let's light up your savings with a custom solar solution</p>
          <Button 
            onClick={handleWhatsApp}
            className="bg-solar-orange hover:bg-solar-orange-dark text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Your Free Quote Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
