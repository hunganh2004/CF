
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-gray-900 p-8 md:p-12 rounded-lg shadow-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-sunset-orange-700 mb-6">Liên Hệ & Vị Trí</h1>
        <p className="text-center text-lg text-neutral-gray-700 dark:text-neutral-gray-300 mb-12">
          Chúng tôi rất mong được gặp bạn. Hãy ghé thăm hoặc liên hệ với chúng tôi!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-gray-900 dark:text-neutral-gray-100 mb-4">Thông Tin Liên Hệ</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-sunset-orange-600 dark:text-sunset-orange-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-neutral-gray-100">Địa chỉ</h3>
                    <p className="text-neutral-gray-700 dark:text-neutral-gray-300">123 Bờ Biển, TP. Đại Dương</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-sunset-orange-600 dark:text-sunset-orange-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-neutral-gray-100">Điện thoại</h3>
                    <p className="text-neutral-gray-700 dark:text-neutral-gray-300">(012) 345-6789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-sunset-orange-600 dark:text-sunset-orange-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-neutral-gray-100">Email</h3>
                    <p className="text-neutral-gray-700 dark:text-neutral-gray-300">contact@rocketglobal.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-gray-900 dark:text-neutral-gray-100 mb-4">Giờ Mở Cửa</h2>
               <div className="flex items-start gap-4">
                  <Clock className="text-sunset-orange-600 dark:text-sunset-orange-400 mt-1 flex-shrink-0" size={24} />
                   <div className="text-neutral-gray-700 dark:text-neutral-gray-300">
                    <p><span className="font-semibold">Thứ Hai - Thứ Sáu:</span> 7:00 - 21:00</p>
                    <p><span className="font-semibold">Thứ Bảy - Chủ Nhật:</span> 8:00 - 22:00</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg shadow-lg overflow-hidden h-96 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447998995393!2d106.69532581474939!3d10.776953192320777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a3d5e3e2d%3A0x3f3d3d5e3e2d!2sNh%C3%A0%20h%C3%A1t%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1628582498205!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps Location for Rocket Global"
              className="dark:grayscale dark:invert"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;