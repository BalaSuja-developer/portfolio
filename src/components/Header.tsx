import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { sectionId: 'hero', label: 'About' },
    { sectionId: 'skills', label: 'Skills' },
    { sectionId: 'about', label: 'Experience' },
    { sectionId: 'projects', label: 'Projects' },
    { sectionId: 'education', label: 'Education' },
    { sectionId: 'blog', label: 'Certifications' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-mx shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-9 sm:px-9 lg:px-9">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0 text-xl font-bold text-black">
            Bala Suja K         
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9">
            {navItems.map((item) => (
              <button
                key={item.sectionId} // ✅ Corrected
                onClick={() => scrollToSection(item.sectionId)} // ✅ Corrected
                className="text-black hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.sectionId} // ✅ Corrected
                onClick={() => scrollToSection(item.sectionId)} // ✅ Corrected
                className="block w-full text-left px-4 py-2 text-black hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
