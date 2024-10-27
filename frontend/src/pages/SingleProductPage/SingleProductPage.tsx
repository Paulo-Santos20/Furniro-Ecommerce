<<<<<<< HEAD
// SingleProductPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
import './SingleProduct.css';
=======
// pages/SingleProductPage/SingleProductPage.tsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SingleProductPage.css";
import separator from "../../assets/icons/separator.svg";
import separatorHorizontal from "../../assets/icons/separator-horizontal.svg";
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image_link: string;
<<<<<<< HEAD
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
=======
  image?: string;
  images?: string[];
  is_new?: boolean;
  additionalInfo?: string;
  category?: string;
  sku?: string;
  tags?: string[];
  rating: number;
  reviewCount: number;
}

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [productImages, setProductImages] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb

  useEffect(() => {
    const fetchProduct = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
        setSelectedImage(response.data.image_link);
      } catch (error) {
        console.error('Error fetching product:', error);
=======
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);

        const allImages = [
          response.data.image,
          ...(response.data.images || []),
        ].filter(Boolean);

        setProductImages(allImages);
        setSelectedImage(allImages[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

<<<<<<< HEAD
  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  const handleQuantityChange = (increment: boolean) => {
    setQuantity(prev => increment ? prev + 1 : Math.max(1, prev - 1));
=======
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (product) {
        try {
          const response = await axios.get("http://localhost:3000/products");
          const filtered = response.data
            .filter((p: Product) => p.id !== product.id)
            .slice(0, 4);
          setRelatedProducts(filtered);
        } catch (error) {
          console.error("Error fetching related products:", error);
        }
      }
    };

    if (product) {
      fetchRelatedProducts();
    }
  }, [product]);

  if (loading) {
    return (
      <div className="product-page__loading">
        <div className="product-page__loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-page__error">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/shop")}>Return to Shop</button>
      </div>
    );
  }

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
<<<<<<< HEAD
      alert('Please select size and color');
      return;
    }
    
    console.log('Added to cart:', {
      product,
      quantity,
      size: selectedSize,
      color: selectedColor
=======
      alert("Please select size and color");
      return;
    }

    console.log("Added to cart:", {
      product,
      quantity,
      size: selectedSize,
      color: selectedColor,
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb
    });
  };

  return (
<<<<<<< HEAD
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
=======
    <>
      <div className="product-page__breadcrumb-container">
        <div className="product-page__breadcrumb-content">
          <div className="product-page__breadcrumb-links">
            <Link to="/">Home</Link>
            <img
              src={separator}
              alt="separator"
              className="product-page__breadcrumb-separator"
            />
            <Link to="/shop">Shop</Link>
            <img
              src={separator}
              alt="separator"
              className="product-page__breadcrumb-separator"
            />
            <img
              src={separatorHorizontal}
              alt="separator"
              className="product-page__breadcrumb-separator"
            />

            <span className="current">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="product-page">
        <div className="product-page__details">
          <div className="product-page__gallery">
            <div className="product-page__thumbnail-list">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`product-page__thumbnail ${
                    selectedImage === image ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.jpg";
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="product-page__main-image">
              <img
                src={selectedImage}
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.src = "/assets/images/placeholder.jpg";
                }}
              />
            </div>
          </div>

          <div className="product-page__info">
            <h1 className="product-page__title">{product.name}</h1>

            <div className="product-page__price">
              <span className="product-page__current-price">
                Rp {parseFloat(product.price).toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="product-page__original-price">
                  Rp {parseFloat(product.originalPrice).toLocaleString()}
                </span>
              )}
            </div>

            <div className="product-page__rating-section">
              <div className="product-page__stars">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`star ${
                      index < product.rating ? "filled" : "empty"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="product-page__review-count">
                {product.reviewCount} Customer Review
              </span>
            </div>

            <div className="product-page__short-description">
              <p>{product.description}</p>
            </div>

            <div className="product-page__options">
              <div className="product-page__size">
                <label className="product-page__label">Size</label>
                <div className="product-page__size-buttons">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className={`product-page__size-button ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-page__color">
                <label className="product-page__label">Color</label>
                <div className="product-page__color-buttons">
                  {["#B88E2F", "#333333", "#444444"].map((color) => (
                    <button
                      key={color}
                      className={`product-page__color-button ${
                        selectedColor === color ? "active" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              <div className="product-page__quantity">
                <label className="product-page__label">Quantity</label>
                <div className="product-page__quantity-controls">
                  <button onClick={() => handleQuantityChange(false)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(true)}>+</button>
                </div>
              </div>

              <div className="product-page__actions">
                <button
                  className="product-page__add-to-cart"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
                <button className="product-page__action-button">
                  <img src="/assets/icons/heart.svg" alt="Add to wishlist" />
                </button>
                <button className="product-page__action-button">
                  <img src="/assets/icons/compare.svg" alt="Compare" />
                </button>
              </div>
            </div>

            <div className="product-page__meta">
              <div className="product-page__meta-item">
                <span>SKU</span>
                <span>: {product.sku || "SS001"}</span>
              </div>
              <div className="product-page__meta-item">
                <span>Category</span>
                <span>: {product.category || "Sofas"}</span>
              </div>
              <div className="product-page__meta-item">
                <span>Tags</span>
                <span>
                  : {product.tags?.join(", ") || "Sofa, Chair, Home, Shop"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-page__description">
          <div className="product-page__tabs">
            <button
              className={`product-page__tab ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`product-page__tab ${
                activeTab === "additional" ? "active" : ""
              }`}
              onClick={() => setActiveTab("additional")}
            >
              Additional Information
            </button>
            <button
              className={`product-page__tab ${
                activeTab === "reviews" ? "active" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews [5]
            </button>
          </div>

          <div className="product-page__tab-content">
            {activeTab === "description" && (
              <div className="product-page__description-content">
                <p>{product.description}</p>
                {product.additionalInfo && <p>{product.additionalInfo}</p>}
              </div>
            )}
            {activeTab === "additional" && (
              <div className="product-page__additional-content">
                <p>
                  Additional information about the product will be displayed
                  here.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="product-page__reviews-content">
                <p>Product reviews will be displayed here.</p>
              </div>
            )}
          </div>
        </div>

        <div className="product-page__related">
          <h2 className="product-page__related-title">Related Products</h2>
          <div className="product-page__related-grid">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="product-page__related-item"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="product-page__related-image">
                    <img src={relatedProduct.image} alt={relatedProduct.name} />
                  </div>
                  <div className="product-page__related-info">
                    <h3 className="product-page__related-name">
                      {relatedProduct.name}
                    </h3>
                    <p className="product-page__related-description">
                      {relatedProduct.description}
                    </p>
                    <div className="product-page__related-price">
                      <span className="product-page__related-current-price">
                        Rp {parseFloat(relatedProduct.price).toLocaleString()}
                      </span>
                      {relatedProduct.originalPrice && (
                        <span className="product-page__related-original-price">
                          Rp{" "}
                          {parseFloat(
                            relatedProduct.originalPrice
                          ).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No related products found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
>>>>>>> 836d2c28573ce8009862d4a2e0fd0f359c2675bb
