import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import Button from '../components/Button';
import { Plus, Minus, Trash2, Utensils, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('takeaway');
  
  const tax = totalPrice * 0.08; // 8% tax
  const finalTotal = totalPrice + tax;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    // Simulate payment processing
    console.log('Processing payment...');
    const orderDetails = { items, finalTotal, orderType };
    clearCart();
    navigate('/confirmation', { state: { order: orderDetails } });
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Giỏ Hàng Của Bạn Trống</h1>
        <p className="text-coffee-brown-700 mb-8">Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
        <Button onClick={() => navigate('/menu')}>Xem Thực Đơn</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-coffee-brown-900">Đơn Hàng Của Bạn</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Sản Phẩm Trong Giỏ</h2>
          <div className="space-y-6">
            {items.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between gap-4 border-b pb-6 last:border-b-0">
                <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-coffee-brown-600">{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                       <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 sm:hidden mt-2 text-sm flex items-center gap-1">
                        <Trash2 size={14} /> Xóa
                      </button>
                    </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 rounded-full bg-gray-200 hover:bg-gray-300"><Minus size={16} /></button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 rounded-full bg-gray-200 hover:bg-gray-300"><Plus size={16} /></button>
                    </div>
                    <span className="font-bold w-28 text-right">{(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 hidden sm:block"><Trash2 size={20} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md self-start sticky top-24">
          <h2 className="text-2xl font-bold mb-4">Tóm Tắt</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Loại Đơn Hàng</h3>
            <div className="flex gap-4">
                <button onClick={() => setOrderType('takeaway')} className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-colors ${orderType === 'takeaway' ? 'border-ocean-blue-500 bg-ocean-blue-50' : 'border-gray-300'}`}>
                    <ShoppingBag size={20} /> Mang Đi
                </button>
                <button onClick={() => setOrderType('dine-in')} className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-colors ${orderType === 'dine-in' ? 'border-ocean-blue-500 bg-ocean-blue-50' : 'border-gray-300'}`}>
                    <Utensils size={20} /> Tại Quán
                </button>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between"><span>Tạm Tính</span><span>{totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></div>
            <div className="flex justify-between"><span>Thuế (8%)</span><span>{tax.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></div>
            <div className="flex justify-between font-bold text-lg border-t pt-2"><span>Tổng Cộng</span><span>{finalTotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></div>
          </div>
          
          <form onSubmit={handlePayment}>
             <Button type="submit" className="w-full" size="lg">Tiến Hành Thanh Toán</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
