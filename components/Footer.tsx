
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-brown-900 text-coffee-brown-100 dark:bg-coffee-brown-950 border-t border-coffee-brown-800 dark:border-coffee-brown-800">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="text-ocean-blue-400" size={24} />
              <span className="text-xl font-bold">Rocket Global</span>
            </div>
            <p className="text-sm text-coffee-brown-300">
              Nơi mang đến những tách cà phê hảo hạng và không gian thư giãn lấy cảm hứng từ đại dương.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="hover:text-ocean-blue-400 transition-colors">Trang Chủ</NavLink></li>
              <li><NavLink to="/menu" className="hover:text-ocean-blue-400 transition-colors">Thực Đơn</NavLink></li>
              <li><NavLink to="/about" className="hover:text-ocean-blue-400 transition-colors">Về Chúng Tôi</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-ocean-blue-400 transition-colors">Liên Hệ</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-sm text-coffee-brown-300">
              <li>Địa chỉ: 123 Bờ Biển, TP. Đại Dương</li>
              <li>Điện thoại: (012) 345-6789</li>
              <li>Email: contact@rocketglobal.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-brown-300 hover:text-ocean-blue-400 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-coffee-brown-300 hover:text-ocean-blue-400 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-coffee-brown-300 hover:text-ocean-blue-400 transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-coffee-brown-800 pt-6 text-center text-sm text-coffee-brown-400">
          <p>&copy; {new Date().getFullYear()} Rocket Global. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;