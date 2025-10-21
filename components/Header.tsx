import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Coffee, ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import Button from './Button';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const activeLinkStyle = {
    color: '#0ea5e9',
    fontWeight: '600',
  };

  const navLinks = (
    <>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ocean-blue-500 transition-colors">Trang Chủ</NavLink>
      <NavLink to="/menu" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ocean-blue-500 transition-colors">Thực Đơn</NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ocean-blue-500 transition-colors">Về Chúng Tôi</NavLink>
    </>
  );

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-ocean-blue-700">
          <Coffee size={28} />
          <span>Ocean Brew</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-lg text-coffee-brown-800">
          {navLinks}
        </div>

        <div className="flex items-center gap-4">
          <NavLink to="/cart" className="relative text-coffee-brown-800 hover:text-ocean-blue-500 transition-colors">
            <ShoppingCart size={28} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-ocean-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>
          
          <div className="hidden sm:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <NavLink to="/account" className="flex items-center gap-2 text-coffee-brown-800 hover:text-ocean-blue-500 transition-colors">
                  <User size={24} />
                  <span>Tài Khoản</span>
                </NavLink>
                <Button onClick={handleLogout} variant="secondary" size="sm">
                  <LogOut size={16} className="mr-1"/>
                  Đăng Xuất
                </Button>
              </>
            ) : (
              <NavLink to="/login">
                <Button size="sm">Đăng Nhập</Button>
              </NavLink>
            )}
          </div>

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
            <div className="sm:hidden flex flex-col items-center gap-4 mt-4 pt-4 border-t w-full px-4">
              {isLoggedIn ? (
                <>
                  <NavLink to="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-coffee-brown-800 hover:text-ocean-blue-500 transition-colors">
                    <User size={24} />
                    <span>Tài Khoản</span>
                  </NavLink>
                  <Button onClick={handleLogout} variant="secondary" size="sm" className="w-full max-w-xs">
                    <LogOut size={16} className="mr-1"/>
                    Đăng Xuất
                  </Button>
                </>
              ) : (
                <NavLink to="/login" className="w-full max-w-xs">
                  <Button size="sm" className="w-full">Đăng Nhập</Button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
