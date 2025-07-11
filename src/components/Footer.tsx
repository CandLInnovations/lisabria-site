import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/60 border-t border-rose-100">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-light text-gray-800">Lisa Bria</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Holistic healing through energy transmutation. Helping you discover your full potential through the transformative power of reiki.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors cursor-pointer">
                <Heart className="w-5 h-5 text-rose-600" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'My Approach', href: '/my-approach' },
                { name: 'Ready for Reiki', href: '/ready-for-reiki' },
                { name: 'Little Reiki', href: '/little-reiki' },
                { name: 'Reiki Prep', href: '/reiki-prep' },
                { name: 'Book a Session', href: '/contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-rose-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-rose-400" />
                <span>hello@lisabria.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-rose-400" />
                <span>Available by appointment</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-rose-400" />
                <span>Remote sessions worldwide</span>
              </div>
            </div>
            
            {/* Daily Meditation CTA */}
            <div className="bg-gradient-to-r from-rose-100 to-purple-100 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700 mb-2">Join our daily healing meditation</p>
              <p className="text-xs text-gray-600">Every day at Noon MST</p>
              <button className="mt-2 text-rose-600 hover:text-rose-700 font-medium text-sm">
                Send healing energy →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rose-100 bg-white/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2025 Lisa Bria, holistic healing through energy transmutation.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-rose-600 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-rose-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;