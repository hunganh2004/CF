
import React, { useState } from 'react';
import { mockProducts } from '../data/mockData';
import MenuItemCard from '../components/MenuItemCard';
import { Product } from '../types';

type Category = 'Tất Cả' | 'Cà Phê' | 'Trà' | 'Bánh Ngọt';

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Tất Cả');

  const categories: Category[] = ['Tất Cả', 'Cà Phê', 'Trà', 'Bánh Ngọt'];

  const filteredProducts = selectedCategory === 'Tất Cả'
    ? mockProducts
    : mockProducts.filter(p => p.category === selectedCategory);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8 text-coffee-brown-900 dark:text-coffee-brown-100">Thực Đơn Của Chúng Tôi</h1>
      
      {/* Category Filters */}
      <div className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
              selectedCategory === category
                ? 'bg-ocean-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-coffee-brown-800 text-coffee-brown-800 dark:text-coffee-brown-200 hover:bg-ocean-blue-100 dark:hover:bg-coffee-brown-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <MenuItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;