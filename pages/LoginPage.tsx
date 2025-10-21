
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    login();
    navigate('/account');
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-coffee-brown-900">Đăng nhập vào tài khoản</h2>
            <p className="mt-2 text-sm text-gray-600">
              Hoặc <Link to="/register" className="font-medium text-ocean-blue-600 hover:text-ocean-blue-500">tạo tài khoản mới</Link>
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleLogin}>
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
                  defaultValue="customer@oceanbrew.com"
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
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocean-blue-500 focus:border-ocean-blue-500 sm:text-sm"
                  defaultValue="password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-ocean-blue-600 focus:ring-ocean-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Ghi nhớ tôi
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-ocean-blue-600 hover:text-ocean-blue-500">
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Đăng nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
