
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const orderDetails = location.state?.order;

  return (
    <div className="max-w-2xl mx-auto text-center py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500" size={80} />
        </div>
        <h1 className="text-3xl font-bold text-ocean-blue-700 mb-2">Đặt Hàng Thành Công!</h1>
        <p className="text-coffee-brown-700 mb-6">
          Cảm ơn bạn đã tin tưởng Ocean Brew Cafe. Đơn hàng của bạn đang được chuẩn bị.
        </p>

        {orderDetails && (
          <div className="text-left bg-gray-50 p-4 rounded-lg mb-6 border">
            <h3 className="font-bold text-lg mb-2">Chi tiết đơn hàng</h3>
            <ul className="space-y-1 text-sm text-coffee-brown-800">
              {orderDetails.items.map((item: any) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>{(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-base border-t mt-2 pt-2">
              <span>Tổng cộng</span>
              <span>{orderDetails.finalTotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-4 mt-8">
          <Link to="/">
            <Button variant="secondary">Về Trang Chủ</Button>
          </Link>
          <Link to="/review">
            <Button>Để Lại Đánh Giá</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
