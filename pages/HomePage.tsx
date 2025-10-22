import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import MenuItemCard from '../components/MenuItemCard';
import Button from '../components/Button';
import { Gift, Ticket, MapPin, Quote, Star } from 'lucide-react';

// Component to inject animation styles
const AnimationStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }
    @keyframes kenburns-top {
        0% { transform: scale(1) translateY(0); transform-origin: 50% 16%; }
        100% { transform: scale(1.15) translateY(-15px); transform-origin: top; }
    }
    @keyframes icon-bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
    }
    .animate-scale-in {
        animation: scaleIn 0.6s ease-out forwards;
        opacity: 0;
    }
    .bg-kenburns {
        animation: kenburns-top 8s ease-out both;
    }
    .group:hover .animate-icon-bounce {
        animation: icon-bounce 0.5s ease-in-out;
    }
  `}</style>
);


const HomePage: React.FC = () => {
  // Get first 3 items as featured items
  const featuredItems = mockProducts.slice(0, 3);
  
  const testimonials = [
    {
      quote: "Không gian tuyệt vời, cà phê thì hảo hạng. Ocean Latte thực sự là một trải nghiệm khó quên. Chắc chắn sẽ quay lại!",
      name: "Anh Minh",
      avatar: "https://picsum.photos/seed/avatar1/100/100",
      rating: 5,
    },
    {
      quote: "Tôi rất thích bánh sừng bò ở đây, giòn rụm và thơm bơ. Một nơi lý tưởng để làm việc và thư giãn.",
      name: "Chị Lan Anh",
      avatar: "https://picsum.photos/seed/avatar2/100/100",
      rating: 5,
    },
    {
      quote: "Dịch vụ rất thân thiện và chuyên nghiệp. Các bạn barista đã tư vấn cho tôi một loại trà rất hợp khẩu vị.",
      name: "Bạn Hoàng",
      avatar: "https://picsum.photos/seed/avatar3/100/100",
      rating: 4,
    },
  ];

  return (
    <>
      <AnimationStyles />
      <div className="space-y-12 md:space-y-20 overflow-x-hidden"> {/* Prevent horizontal scrollbar from animations */}
        {/* Hero Section */}
        <section 
          className="relative text-center text-white rounded-lg shadow-xl overflow-hidden min-h-[450px] flex items-center justify-center"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-kenburns"
            style={{ backgroundImage: "url('https://picsum.photos/seed/cafeinterior/1200/600')" }}
          ></div>
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 p-4">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                Chào mừng đến Rocket Global
              </h1>
              <p 
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                Trải nghiệm cà phê và bánh ngọt hảo hạng trong không gian ấm cúng, đậm chất đại dương.
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link to="/menu">
                  <Button size="lg">Khám Phá Thực Đơn</Button>
                </Link>
              </div>
          </div>
        </section>

        {/* Special Offers Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-coffee-brown-900 dark:text-coffee-brown-100 animate-fade-in-up">Ưu đãi đặc biệt</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-ocean-blue-100 dark:bg-ocean-blue-900/50 p-6 rounded-lg shadow-sm flex items-center gap-6 group transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <Ticket size={48} className="text-ocean-blue-600 dark:text-ocean-blue-400 flex-shrink-0 animate-icon-bounce"/>
                  <div>
                      <h3 className="text-xl font-bold text-ocean-blue-800 dark:text-ocean-blue-200">Giảm 20% cho món mới</h3>
                      <p className="text-coffee-brown-700 dark:text-coffee-brown-300 mt-1">Thử ngay 'Latte San Hô' và nhận ưu đãi đặc biệt trong tuần này!</p>
                  </div>
              </div>
              <div className="bg-ocean-blue-100 dark:bg-ocean-blue-900/50 p-6 rounded-lg shadow-sm flex items-center gap-6 group transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <Gift size={48} className="text-ocean-blue-600 dark:text-ocean-blue-400 flex-shrink-0 animate-icon-bounce"/>
                  <div>
                      <h3 className="text-xl font-bold text-ocean-blue-800 dark:text-ocean-blue-200">Combo Buổi Sáng</h3>
                      <p className="text-coffee-brown-700 dark:text-coffee-brown-300 mt-1">Tiết kiệm hơn với combo 1 Cà Phê + 1 Bánh Ngọt chỉ với 59.000đ.</p>
                  </div>
              </div>
          </div>
        </section>
        
        {/* Featured Items Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-coffee-brown-900 dark:text-coffee-brown-100 animate-fade-in-up">Khám Phá Món Đặc Trưng</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((product, index) => (
              <div key={product.id} className="animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <MenuItemCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link to="/menu">
                  <Button size="lg" variant="secondary">Xem Toàn Bộ Thực Đơn</Button>
              </Link>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-white dark:bg-coffee-brown-900 p-8 md:p-12 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-3xl font-bold mb-4 text-coffee-brown-900 dark:text-coffee-brown-100">Câu Chuyện Của Chúng Tôi</h2>
                    <p className="text-coffee-brown-700 dark:text-coffee-brown-300 leading-relaxed mb-6">
                        Rocket Global ra đời từ tình yêu vô tận với hai thứ: cà phê hảo hạng và sự tĩnh lặng của đại dương. Chúng tôi mong muốn tạo ra một không gian nơi mọi người có thể tạm gác lại những bộn bề của cuộc sống và tìm thấy một chút bình yên.
                    </p>
                    <Link to="/about">
                      <Button variant="secondary">Khám Phá Thêm</Button>
                    </Link>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden h-80 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img 
                        src="https://picsum.photos/seed/cafepeople/600/400" 
                        alt="Our story" 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
        </section>
        
        {/* Testimonials Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-coffee-brown-900 dark:text-coffee-brown-100 animate-fade-in-up">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-coffee-brown-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-ocean-blue-200" />
                <Quote className="text-ocean-blue-300 dark:text-ocean-blue-700 mb-4" size={32} />
                <p className="text-coffee-brown-700 dark:text-coffee-brown-300 italic mb-4 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <h4 className="font-bold text-coffee-brown-900 dark:text-coffee-brown-100">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="bg-white dark:bg-coffee-brown-900 p-8 md:p-12 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-3xl font-bold mb-4 text-coffee-brown-900 dark:text-coffee-brown-100">Ghé Thăm Chúng Tôi</h2>
                  <div className="flex items-start gap-4 text-coffee-brown-700 dark:text-coffee-brown-300 mb-6">
                      <MapPin size={24} className="text-ocean-blue-600 dark:text-ocean-blue-400 mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                          <strong>Địa chỉ:</strong> 123 Bờ Biển, TP. Đại Dương
                          <br />
                          Chúng tôi mong được đón tiếp bạn!
                      </p>
                  </div>
                  <Link to="/contact">
                    <Button variant="primary">Xem Bản Đồ & Liên Hệ</Button>
                  </Link>
              </div>
              <div className="rounded-lg shadow-lg overflow-hidden h-64 md:h-80 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447998995393!2d106.69532581474939!3d10.776953192320777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a3d5e3e2d%3A0x3f3d3d5e3e2d!2sNh%C3%A0%20h%C3%A1t%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1628582498205!5m2!1svi!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true}
                      loading="lazy"
                      title="Google Maps Location"
                      className="dark:grayscale dark:invert"
                  ></iframe>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;