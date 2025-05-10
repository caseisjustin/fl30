import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../api/products';
import { FiStar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { YouMightLike } from './components';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(id);
        setProduct(data);
        setSelectedImage(data.images[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="p-8">Loading...</div>;

  return (
    <>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Product Images */}
        <div className="flex flex-row-reverse items-center gap-4">
          <img
            src={selectedImage}
            alt={product.category}
            className="rounded-xl w-full object-cover"
          />
          <div className="flex-col gap-4">
            {product.images?.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="preview"
                onClick={() => setSelectedImage(img)}
                className={`w-44 h-44 object-cover rounded-xl cursor-pointer border-2 ${selectedImage === img ? 'border-black' : 'border-transparent'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.category}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) =>
                i < Math.round(product.rating) ? <AiFillStar key={i} /> : <FiStar key={i} />
              )}
            </div>
            <span className="text-sm text-gray-600">{product.rating}/5</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-black">${product.price}</span>
            <span className="line-through text-gray-400">${product.oldPrice || product.price * 1.2}</span>
          </div>

          <p className="text-gray-600 mb-6">
            {product.description ||
              'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'}
          </p>

          {/* Colors */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Select Colors</p>
            <div className="flex gap-4">
              <span className="h-6 w-6 rounded-full bg-[#4b463f] border-2 border-black"></span>
              <span className="h-6 w-6 rounded-full bg-[#30465c]"></span>
              <span className="h-6 w-6 rounded-full bg-[#23263a]"></span>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Choose Size</p>
            <div className="flex gap-3">
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 border px-3 py-1 rounded-full">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full">Add to Cart</button>
          </div>
        </div>
      </div>
      <YouMightLike />
    </>
  );
};

export default ProductDetails;
