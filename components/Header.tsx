
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#0ea5e9',
    fontWeight: '600',
  };

  const navLinks = (
    <>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ocean-blue-500 transition-colors">Trang Chủ</NavLink>
      <NavLink to="/menu" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ocean-blue-500 transition-colors">Thực Đơn</NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ocean-blue-500 transition-colors">Về Chúng Tôi</NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ocean-blue-500 transition-colors">Liên Hệ</NavLink>
    </>
  );

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-ocean-blue-700">
          <Rocket size={28} />
          <span>Rocket Global</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-lg text-coffee-brown-800">
          {navLinks}
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-coffee-brown-800">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-40">
          <div className="flex flex-col items-center gap-4 py-4 text-lg text-coffee-brown-800">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
