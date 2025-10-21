
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration and login logic
    login();
    navigate('/account');
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-coffee-brown-900">Tạo tài khoản mới</h2>
            <p className="mt-2 text-sm text-gray-600">
              Đã có tài khoản? <Link to="/login" className="font-medium text-ocean-blue-600 hover:text-ocean-blue-500">Đăng nhập ngay</Link>
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Họ và tên
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocean-blue-500 focus:border-ocean-blue-500 sm:text-sm"
                  placeholder="Nguyễn Văn A"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Địa chỉ email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocean-blue-500 focus:border-ocean-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password"className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocean-blue-500 focus:border-ocean-blue-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div>
              <Button type="submit" className="w-full">
                Đăng ký
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
