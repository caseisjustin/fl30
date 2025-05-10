import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHeart, FiStar } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

const ProductCard = ({ id, image, title, category, price, rating }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const toggleLike = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the like button
    setLiked((prev) => !prev);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="border rounded-2xl p-4 hover:shadow-md transition bg-white cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-xl h-60 w-full object-cover"
        />
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={toggleLike}
        >
          {liked ? (
            <AiFillHeart size={20} className="text-red-500" />
          ) : (
            <FiHeart size={20} />
          )}
        </button>
      </div>
      <h3 className="font-semibold mt-3">{title}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">${price}</span>
        <div className="flex items-center gap-1">
          <FiStar size={20} />
          <span className="text-sm">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
