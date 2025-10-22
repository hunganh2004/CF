
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const activeLinkStyle = {
    color: '#f2551d', // sunset-orange-600
    fontWeight: '600',
  };

  const navLinks = (
    <>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-sunset-orange-500 transition-colors">Trang Chủ</NavLink>
      <NavLink to="/menu" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-sunset-orange-500 transition-colors">Thực Đơn</NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-sunset-orange-500 transition-colors">Về Chúng Tôi</NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-sunset-orange-500 transition-colors">Liên Hệ</NavLink>
    </>
  );

  return (
    <header className="bg-white/80 dark:bg-neutral-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-sunset-orange-700">
          <Rocket size={28} />
          <span>Rocket Global</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-lg text-neutral-gray-700 dark:text-neutral-gray-200">
          {navLinks}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full text-neutral-gray-700 dark:text-neutral-gray-200 hover:bg-neutral-gray-200 dark:hover:bg-neutral-gray-800 transition-colors">
            {theme === 'light' ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-neutral-gray-700 dark:text-neutral-gray-200">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-gray-900 shadow-lg absolute top-full left-0 w-full z-40">
          <div className="flex flex-col items-center gap-4 py-4 text-lg text-neutral-gray-700 dark:text-neutral-gray-200">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;