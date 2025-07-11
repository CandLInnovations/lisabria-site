'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'My Approach', href: '/my-approach' },
    { name: 'Ready for Reiki', href: '/ready-for-reiki' },
    { name: 'Little Reiki', href: '/little-reiki' },
    { name: 'Reiki Prep', href: '/reiki-prep' },
    { name: 'Contact', href: '/contact' }
  ];

  const isCurrentPage = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href;
  };

  const getLinkStyle = (href: string) => {
    const isActive = isCurrentPage(href);
    
    if (isActive) {
      return {
        background: 'linear-gradient(to right, rgb(168 85 247), rgb(244 114 182))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: '400',
        transition: 'all 0.3s ease'
      };
    }
    
    return {
      color: 'rgb(55 65 81)',
      fontWeight: '300',
      transition: 'all 0.3s ease'
    };
  };

  const getHoverStyle = {
    background: 'linear-gradient(to right, rgb(168 85 247), rgb(244 114 182))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <nav 
      className="backdrop-blur-md border-b border-purple-200 sticky top-0 z-50"
      style={{
        background: 'linear-gradient(to right, rgb(229, 231, 235), rgb(233, 213, 255)) !important',
        backgroundColor: 'rgb(229, 231, 235) !important'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Large Overlapping Logo with Pink Glow */}
          <div className="relative">
            <div className="absolute -top-4 -left-2 z-10">
              {/* Pink glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/60 to-rose-200/60 rounded-full blur-md scale-110"></div>
              <img 
                src="/lisabria_wellness_flower_eternal9.png" 
                alt="Lisa Bria Wellness Logo" 
                className="relative w-24 h-24 object-contain drop-shadow-lg"
              />
            </div>
            {/* Invisible spacer to maintain layout */}
            <div className="w-20 h-4"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={getLinkStyle(item.href)}
                className="relative group cursor-pointer"
                onMouseEnter={(e) => {
                  if (!isCurrentPage(item.href)) {
                    const target = e.target as HTMLElement;
                    Object.assign(target.style, getHoverStyle);
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCurrentPage(item.href)) {
                    const target = e.target as HTMLElement;
                    Object.assign(target.style, getLinkStyle(item.href));
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b border-purple-200 shadow-lg"
          style={{
            background: 'linear-gradient(to right, rgb(229, 231, 235), rgb(233, 213, 255)) !important',
            backgroundColor: 'rgb(229, 231, 235) !important'
          }}
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={getLinkStyle(item.href)}
                className="block px-3 py-2 hover:bg-purple-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;