
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Phone, Mail, Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-solar-orange" />
            <span className="text-xl font-bold text-solar-blue">Avani Solar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-solar-blue bg-solar-gray-light' 
                  : 'text-gray-700 hover:text-solar-blue'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-solar-blue bg-solar-gray-light' 
                  : 'text-gray-700 hover:text-solar-blue'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-solar-blue bg-solar-gray-light' 
                  : 'text-gray-700 hover:text-solar-blue'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919783155554" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-solar-blue">
              <Phone className="h-4 w-4" />
              <span>+91-97831-55554</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-solar-blue focus:outline-none focus:text-solar-blue"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-solar-blue bg-solar-gray-light' 
                    : 'text-gray-700 hover:text-solar-blue hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-solar-blue bg-solar-gray-light' 
                    : 'text-gray-700 hover:text-solar-blue hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-solar-blue bg-solar-gray-light' 
                    : 'text-gray-700 hover:text-solar-blue hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:+919783155554" 
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-solar-blue"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91-97831-55554</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
