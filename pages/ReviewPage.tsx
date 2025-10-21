
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import StarRating from '../components/StarRating';

const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this data to a backend
    console.log({ rating, comment });
    alert('Cảm ơn bạn đã phản hồi!');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto text-center py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-ocean-blue-700 mb-2">Cảm Ơn Đã Đặt Hàng!</h1>
        <p className="text-coffee-brown-700 mb-6">Chúng tôi rất mong nhận được phản hồi của bạn.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-coffee-brown-800 mb-3">Trải nghiệm của bạn thế nào?</label>
            <StarRating onRatingChange={setRating} />
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-lg font-semibold text-coffee-brown-800 mb-3">Bạn có nhận xét gì không?</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              placeholder="Chia sẻ thêm với chúng tôi..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition"
            />
          </div>
          
          <Button type="submit" size="lg" className="w-full">Gửi Phản Hồi</Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;