// SingleProductPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
import './SingleProduct.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image_link: string;
  images?: string[];
  is_new?: boolean;
  additionalInfo?: string;
  size?: string[];
  color?: string[];
}

const SingleProductPage: React.FC = () => { // Nome corrigido aqui
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
        setSelectedImage(response.data.image_link);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  const handleQuantityChange = (increment: boolean) => {
    setQuantity(prev => increment ? prev + 1 : Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    
    console.log('Added to cart:', {
      product,
      quantity,
      size: selectedSize,
      color: selectedColor
    });
  };

  return (
    <div className="product-details">
      <div className="product-details__breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; <span>{product.name}</span>
      </div>

      <div className="product-details__content">
        <div className="product-details__images">
          <div className="product-details__thumbnail-list">
            {[product.image_link, ...(product.images || [])].map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`${product.name} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="product-details__main-image">
            <img src={selectedImage} alt={product.name} />
          </div>
        </div>

        <div className="product-details__info">
          <h1 className="product-details__title">{product.name}</h1>
          <div className="product-details__price">
            <span className="current-price">
              R$ {parseFloat(product.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
            {product.originalPrice && (
              <span className="original-price">
                R$ {parseFloat(product.originalPrice).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            )}
          </div>

          <div className="product-details__options">
            <div className="size-selector">
              <h3>Size</h3>
              <div className="size-options">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="color-selector">
              <h3>Color</h3>
              <div className="color-options">
                {['#B88E2F', '#333333', '#444444'].map(color => (
                  <button
                    key={color}
                    className={`color-option ${selectedColor === color ? 'active' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="quantity-selector">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(false)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(true)}>+</button>
              </div>
            </div>
          </div>

          <div className="product-details__actions">
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add To Cart
            </button>
            <button className="compare">
              <img src="/assets/icons/compare.svg" alt="Compare" />
              Compare
            </button>
            <button className="share">
              <img src="/assets/icons/share.svg" alt="Share" />
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="product-details__description">
        <h2>Description</h2>
        <p>{product.description}</p>
        {product.additionalInfo && (
          <div className="additional-info">
            <h3>Additional Information</h3>
            <p>{product.additionalInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;