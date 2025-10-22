import React from 'react';
import { Coffee, Anchor, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-ocean-blue-700 mb-6">Câu Chuyện Của Rocket Global</h1>
        <p className="text-center text-lg text-coffee-brown-700 mb-12">
          Nơi mỗi tách cà phê là một hành trình khám phá đại dương.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img src="https://picsum.photos/seed/cafefront/600/400" alt="Cafe front" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-coffee-brown-900 mb-4">Khởi Nguồn Từ Đam Mê</h2>
            <p className="text-coffee-brown-700 leading-relaxed">
              Rocket Global ra đời từ tình yêu vô tận với hai thứ: cà phê hảo hạng và sự tĩnh lặng của đại dương. Chúng tôi mong muốn tạo ra một không gian nơi mọi người có thể tạm gác lại những bộn bề của cuộc sống, tìm thấy một chút bình yên và thưởng thức những ly cà phê được pha chế bằng cả trái tim.
            </p>
          </div>
        </div>

        <div className="space-y-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="bg-ocean-blue-100 p-4 rounded-full">
              <Coffee size={40} className="text-ocean-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-coffee-brown-900">Sứ Mệnh Của Chúng Tôi</h3>
              <p className="text-coffee-brown-700 mt-2">
                Mang đến những hạt cà phê chất lượng nhất từ khắp nơi trên thế giới, được rang xay cẩn thận và pha chế bởi các barista tài năng để tạo ra những trải nghiệm vị giác độc đáo và đáng nhớ.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 text-center md:text-right">
            <div className="bg-ocean-blue-100 p-4 rounded-full">
              <Anchor size={40} className="text-ocean-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-coffee-brown-900">Giá Trị Cốt Lõi</h3>
              <p className="text-coffee-brown-700 mt-2">
                Chúng tôi cam kết về Chất lượng, Sự sáng tạo và một Cộng đồng bền vững. Mỗi quyết định của chúng tôi đều dựa trên những giá trị này, từ việc chọn nguồn cung ứng đến cách chúng tôi phục vụ bạn.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-coffee-brown-900 mb-8">Gặp Gỡ Đội Ngũ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/owner/300/300" alt="Team member" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md" />
              <h4 className="text-xl font-bold">Jane Doe</h4>
              <p className="text-ocean-blue-600">Người Sáng Lập & Chuyên Gia Cà Phê</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/barista_lead/300/300" alt="Team member" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md" />
              <h4 className="text-xl font-bold">John Smith</h4>
              <p className="text-ocean-blue-600">Trưởng Barista</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/pastrychef/300/300" alt="Team member" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md" />
              <h4 className="text-xl font-bold">Emily White</h4>
              <p className="text-ocean-blue-600">Đầu Bếp Bánh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;