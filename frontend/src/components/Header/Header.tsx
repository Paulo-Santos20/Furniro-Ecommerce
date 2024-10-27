import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../hooks/CartContext";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useCart();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Pesquisando...");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__container">
          <div className="header__logo">
            <img
              src="/assets/icons/logo.svg"
              alt="Furniro Logo"
              className="header__logo-image"
            />
            <h2 className="header__title">Furniro</h2>
          </div>
          
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          
          <ul className="header__icon-list">
            <li className="header__icon-item">
              <a href="#">
                <img
                  src="/assets/icons/person.svg"
                  alt="User"
                  className="header__icon"
                />
              </a>
            </li>
            <li className="header__icon-item">
              <button onClick={toggleSearch} className="header__search-button">
                <img
                  src="/assets/icons/search.svg"
                  alt="Search"
                  className="header__icon"
                />
              </button>
            </li>
            <li className="header__icon-item">
              <a href="#">
                <img
                  src="/assets/icons/heart.svg"
                  alt="Favorites"
                  className="header__icon"
                />
              </a>
            </li>
            <li className="header__cart">
              <button onClick={toggleCart} className="header__cart-button">
                <img
                  src="/assets/icons/car.svg"
                  alt="Cart"
                  className="header__icon"
                />
                {totalItems > 0 && (
                  <span className="header__cart-count">{totalItems}</span>
                )}
              </button>

              {isCartOpen && (
                <div className="header__cart-dropdown">
                  <div className="header__cart-header">
                    <h3>Shopping Cart</h3>
                    <button onClick={toggleCart} className="header__cart-close">×</button>
                  </div>

                  {cartItems.length === 0 ? (
                    <div className="header__cart-empty">
                      <p>Your cart is empty</p>
                      <Link to="/shop" className="header__cart-shop-now" onClick={toggleCart}>
                        Shop Now
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="header__cart-items">
                        {cartItems.map((item) => (
                          <div key={item.id} className="header__cart-item">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="header__cart-item-image"
                            />
                            <div className="header__cart-item-info">
                              <h4 className="header__cart-item-name">{item.name}</h4>
                              <div className="header__cart-item-details">
                                <span className="header__cart-item-price">
                                  Rp {parseFloat(item.price).toLocaleString()}
                                </span>
                                {item.size && <span className="header__cart-item-size">Size: {item.size}</span>}
                                {item.color && (
                                  <span className="header__cart-item-color">
                                    Color: 
                                    <span
                                      className="header__cart-item-color-dot"
                                      style={{ backgroundColor: item.color }}
                                    />
                                  </span>
                                )}
                              </div>
                              <div className="header__cart-item-quantity">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="header__cart-item-remove"
                              aria-label="Remove item"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="header__cart-footer">
                        <div className="header__cart-total">
                          <span>Total:</span>
                          <span>
                            Rp {cartItems
                              .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
                              .toLocaleString()}
                          </span>
                        </div>
                        <div className="header__cart-buttons">
                          <Link to="/cart" className="header__cart-view-cart" onClick={toggleCart}>
                            View Cart
                          </Link>
                          <Link to="/checkout" className="header__cart-checkout" onClick={toggleCart}>
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </li>
          </ul>
        </nav>

        {isSearchOpen && (
          <div className="header__search-container">
            <form onSubmit={handleSearchSubmit} className="header__search-form">
              <input
                type="text"
                placeholder="Search products..."
                className="header__search-input"
                autoFocus
              />
              <button type="submit" className="header__search-submit">
                Search
              </button>
              <button
                type="button"
                onClick={toggleSearch}
                className="header__search-close"
              >
                ×
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;