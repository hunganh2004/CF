
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import Button from '../components/Button';
import { ChevronLeft } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = mockProducts.find(p => p.id === parseInt(id || ''));
  
  if (!product) {
    return (
        <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Sản phẩm không tồn tại</h1>
            <p className="text-coffee-brown-700 mb-8">Chúng tôi không thể tìm thấy sản phẩm bạn yêu cầu.</p>
            <Button onClick={() => navigate('/menu')}>Quay lại Thực Đơn</Button>
        </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
        <Link to="/menu" className="flex items-center gap-2 text-ocean-blue-600 hover:underline mb-6 font-semibold">
            <ChevronLeft size={20} />
            Trở lại thực đơn
        </Link>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl grid md:grid-cols-2 gap-8">
            <div>
                <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md aspect-square object-cover" />
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold text-ocean-blue-500">{product.category}</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-coffee-brown-900 mt-2 mb-4">{product.name}</h1>
                <p className="text-coffee-brown-700 leading-relaxed mb-6">{product.longDescription}</p>
                <span className="text-2xl md:text-3xl font-bold text-ocean-blue-700 mb-6">
                    {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </span>
            </div>
        </div>
    </div>
  );
};

export default ProductDetailPage;
