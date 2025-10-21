import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import MenuItemCard from '../components/MenuItemCard';
import Button from '../components/Button';
import { Gift, Ticket, Coffee } from 'lucide-react';

const HomePage: React.FC = () => {
  // Get first 3 items as featured items
  const featuredItems = mockProducts.slice(0, 3);

  return (
    <div className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section 
        className="relative text-center text-white rounded-lg p-8 md:p-20 shadow-xl overflow-hidden min-h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/cafeinterior/1200/600')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Chào mừng đến Ocean Brew Cafe</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Trải nghiệm cà phê và bánh ngọt hảo hạng trong không gian ấm cúng, đậm chất đại dương.
            </p>
            <Link to="/menu">
              <Button size="lg">Khám Phá Thực Đơn</Button>
            </Link>
        </div>
      </section>

      {/* Special Offers Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-coffee-brown-900">Ưu đãi đặc biệt</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-ocean-blue-100 p-6 rounded-lg shadow-sm flex items-center gap-6">
                <Ticket size={48} className="text-ocean-blue-600 flex-shrink-0"/>
                <div>
                    <h3 className="text-xl font-bold text-ocean-blue-800">Giảm 20% cho món mới</h3>
                    <p className="text-coffee-brown-700 mt-1">Thử ngay 'Latte San Hô' và nhận ưu đãi đặc biệt trong tuần này!</p>
                </div>
            </div>
            <div className="bg-ocean-blue-100 p-6 rounded-lg shadow-sm flex items-center gap-6">
                <Gift size={48} className="text-ocean-blue-600 flex-shrink-0"/>
                <div>
                    <h3 className="text-xl font-bold text-ocean-blue-800">Combo Buổi Sáng</h3>
                    <p className="text-coffee-brown-700 mt-1">Tiết kiệm hơn với combo 1 Cà Phê + 1 Bánh Ngọt chỉ với 59.000đ.</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="bg-white p-8 md:p-10 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4 text-coffee-brown-900">Câu Chuyện Của Chúng Tôi</h2>
                <p className="text-coffee-brown-700 mb-6 leading-relaxed">
                    Tại Ocean Brew, chúng tôi tin rằng mỗi tách cà phê là một chuyến du hành. Từ những hạt cà phê được lựa chọn kỹ lưỡng đến kỹ thuật pha chế điêu luyện của các Barista, tất cả đều nhằm mang đến cho bạn một trải nghiệm trọn vẹn và đáng nhớ.
                </p>
                <Link to="/about">
                  <Button variant="secondary">Tìm hiểu thêm</Button>
                </Link>
            </div>
            <div className="hidden md:block">
                <img src="https://picsum.photos/seed/barista/500/350" alt="Barista making coffee" className="rounded-lg shadow-lg" />
            </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-coffee-brown-900">Khám Phá Món Đặc Trưng</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map(product => (
            <MenuItemCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/menu">
                <Button size="lg" variant="secondary">Xem Toàn Bộ Thực Đơn</Button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
