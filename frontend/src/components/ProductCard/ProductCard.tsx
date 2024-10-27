<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    image_link: string;
    image: string;
    is_new?: boolean;
  };
  onSeeDetails: (productId: number) => void;
}

<<<<<<< HEAD
=======
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();

>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb
  const getBadge = () => {
    if (product.is_new) {
      return <span className="new">New</span>;
    }
    if (product.discount) {
      return <span className="discount_percent">{product.discount}</span>;
    }
    return null;
  };
<<<<<<< HEAD

  const ProductCard: React.FC<ProductProps> = ({ product, onSeeDetails }) => {
    const navigate = useNavigate();
  
    const handleSeeDetails = () => {
      navigate(`/product/${product.id}`);
    };

  return (
    <div className="product-card">
    <div className="product-image">
      <img src={product.image_link || product.image} alt={product.name} />
      {getBadge()}
      <div className="hover-actions">
        <button
          className="button-details"
          onClick={handleSeeDetails} 
        >
          See Details
          </button>
=======
  const handleSeeDetails = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image_link || product.image} alt={product.name} />
        {getBadge()}
        <div className="hover-actions">
        <button
          className="button-details"
          onClick={handleSeeDetails}
        >
          See Details
        </button>
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb
          <div className="actions">
            <div className="action">
              <img
                src="/assets/icons/share.svg"
                alt="Share"
                className="actions-icon"
              />
              <span>Share</span>
            </div>
            <div className="action">
              <img
                src="/assets/icons/compare.svg"
                alt="Compare"
                className="actions-icon"
              />
              <span>Compare</span>
            </div>
            <div className="action">
              <img
                src="/assets/icons/like.svg"
                alt="Like"
                className="actions-icon"
              />
              <span>Like</span>
            </div>
          </div>
        </div>
      </div>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-sub-title">{product.description}</p>
      <div className="price-container">
<<<<<<< HEAD
        <p className="price">
          R$
          <span className="price-value-discount">
            {parseFloat(product.price).toLocaleString("pt-BR", { 
              minimumFractionDigits: 2 
            })}
          </span>
        </p>

        {product.originalPrice && (
          <p className="original-price">
            R$
            <span className="price-value">
              {parseFloat(product.originalPrice).toLocaleString("pt-BR", { 
                minimumFractionDigits: 2 
              })}
            </span>
=======
        <p className="price">Rp {parseFloat(product.price).toLocaleString()}</p>
        {product.originalPrice && (
          <p className="original-price">
            Rp {parseFloat(product.originalPrice).toLocaleString()}
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
