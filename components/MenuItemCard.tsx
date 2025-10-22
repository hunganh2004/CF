
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface MenuItemCardProps {
  product: Product;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ product }) => {
  return (
    <Link to={`/menu/${product.id}`} className="bg-white dark:bg-coffee-brown-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col group">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-coffee-brown-900 dark:text-coffee-brown-100 group-hover:text-ocean-blue-600 transition-colors">{product.name}</h3>
        <p className="text-coffee-brown-700 dark:text-coffee-brown-300 mt-1 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-ocean-blue-700">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
          <span className="text-sm font-semibold text-ocean-blue-600 group-hover:underline">Xem chi tiết</span>
        </div>
      </div>
    </Link>
  );
};

export default MenuItemCard;