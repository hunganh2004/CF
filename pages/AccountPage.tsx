import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { User, ShoppingBag, MapPin, CreditCard } from 'lucide-react';

const AccountPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const mockOrders = [
    { id: 'OCEAN-123', date: '20/07/2023', total: 125000, status: 'Đã hoàn thành' },
    { id: 'OCEAN-120', date: '15/07/2023', total: 88000, status: 'Đã hoàn thành' },
    { id: 'OCEAN-115', date: '10/07/2023', total: 45000, status: 'Đã hủy' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-coffee-brown-900">Tài Khoản Của Tôi</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md self-start">
            <div className="flex flex-col items-center text-center mb-6">
                <img src="https://picsum.photos/seed/avatar/128/128" alt="User Avatar" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-xl font-bold">Khách Hàng Thân Thiết</h2>
                <p className="text-sm text-coffee-brown-600">customer@oceanbrew.com</p>
            </div>
            <nav className="flex flex-col space-y-2">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-ocean-blue-100 text-ocean-blue-700 font-semibold">
                    <ShoppingBag size={20} /> Lịch sử đơn hàng
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                    <User size={20} /> Thông tin cá nhân
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                    <MapPin size={20} /> Địa chỉ
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                    <CreditCard size={20} /> Phương thức thanh toán
                </a>
            </nav>
            <Button onClick={handleLogout} variant="secondary" className="w-full mt-6">
              Đăng Xuất
            </Button>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Lịch Sử Đơn Hàng</h2>
          <div className="space-y-4">
            {mockOrders.map(order => (
                <div key={order.id} className="border rounded-lg p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                        <p className="font-bold text-ocean-blue-700">Mã Đơn: {order.id}</p>
                        <p className="text-sm text-gray-500">Ngày: {order.date}</p>
                        <p className="font-semibold sm:hidden mt-2">{order.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                        <p className="font-semibold hidden sm:block">{order.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                         <span className={`px-3 py-1 text-sm font-semibold rounded-full mt-0 sm:mt-2 ${
                            order.status === 'Đã hoàn thành' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                            {order.status}
                        </span>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
