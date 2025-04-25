import React from 'react';
import { Link } from 'react-router-dom';
import { GlobeIcon, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0F2B5B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center text-white font-bold text-xl">
              <GlobeIcon className="w-8 h-8 text-[#0F80DE] mr-2" strokeWidth={1.5} />
              <span>NESIA</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI-powered travel planning that helps you explore more with less planning.
              Discover the world with personalized itineraries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Destination Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[#0F80DE]" />
                <span className="text-gray-300">123 Travel Street, Global City, World</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#0F80DE]" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#0F80DE]" />
                <span className="text-gray-300">info@nesia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} NESIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;