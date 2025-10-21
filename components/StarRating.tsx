
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    onRatingChange(ratingValue);
  };

  return (
    <div className="flex justify-center space-x-2">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
              className="hidden"
            />
            <Star
              className="cursor-pointer transition-colors duration-200"
              size={40}
              color={ratingValue <= (hover || rating) ? '#f59e0b' : '#d1d5db'}
              fill={ratingValue <= (hover || rating) ? '#f59e0b' : 'none'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
