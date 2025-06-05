
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919783155554', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919783155554';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:avani.solar.kota@gmail.com';
  };

  return (
    <footer className="bg-solar-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-solar-orange" />
              <span className="text-2xl font-bold">Avani Solar</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading the solar revolution in Kota, Rajasthan. 
              Powering homes and businesses with clean, renewable energy.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin className="h-4 w-4" />
              <span>20-C Shopping Center, Kota, Rajasthan 324007</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-solar-orange transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-solar-orange transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-solar-orange transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <button
                onClick={handleCall}
                className="flex items-center space-x-2 text-gray-300 hover:text-solar-orange transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91-97831-55554</span>
              </button>
              <button
                onClick={handleCall}
                className="flex items-center space-x-2 text-gray-300 hover:text-solar-orange transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91-99833-21552</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center space-x-2 text-gray-300 hover:text-solar-orange transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>avani.solar.kota@gmail.com</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Avani Solar. All rights reserved. | Invest in a Brighter Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
