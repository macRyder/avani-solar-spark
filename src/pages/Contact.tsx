
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      serviceType: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919783155554', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919783155554';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@avanisolar.in';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-solar-blue to-solar-blue-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Get in Touch</h1>
          <p className="text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our team is ready to assist you with your solar journey
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-solar-blue mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-solar-orange bg-opacity-10 rounded-lg">
                    <MapPin className="h-6 w-6 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">20-C Shopping Center, Kota, Rajasthan 324007</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-solar-orange bg-opacity-10 rounded-lg">
                    <Phone className="h-6 w-6 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">+91-97831-55554</p>
                    <p className="text-gray-600">+91-99833-21552</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-solar-orange bg-opacity-10 rounded-lg">
                    <Mail className="h-6 w-6 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@avanisolar.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-solar-orange bg-opacity-10 rounded-lg">
                    <Clock className="h-6 w-6 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday – Saturday: 9 AM – 6 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-solar-blue mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Solar</SelectItem>
                        <SelectItem value="commercial">Commercial Solar</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your solar requirements..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-solar-orange hover:bg-solar-orange-dark text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold text-solar-blue text-center mb-8">Find Us</h2>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-solar-orange mx-auto mb-4" />
                <p className="text-lg text-gray-600">Interactive Map Coming Soon</p>
                <p className="text-gray-500">20-C Shopping Center, Kota, Rajasthan 324007</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
