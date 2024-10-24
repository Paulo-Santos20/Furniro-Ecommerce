import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Pesquisando...");
  };

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
                  <button
                    onClick={toggleSearch}
                    className="header__search-button"
                  >
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
                <li className="header__icon-item">
                  <a href="#">
                    <img
                      src="/assets/icons/car.svg"
                      alt="Cart"
                      className="header__icon"
                    />
                  </a>
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