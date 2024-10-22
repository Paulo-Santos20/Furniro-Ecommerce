import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__container">
          <div className="header__logo">
            <img src="/assets/icons/logo.svg" alt="Furniro Logo" className="header__logo-image" />
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
                <img src="/assets/icons/person.svg" alt="User" className="header__icon" />
              </a>
            </li>
            <li className="header__icon-item">
              <a href="#">
                <img src="/assets/icons/search.svg" alt="Search" className="header__icon" />
              </a>
            </li>
            <li className="header__icon-item">
              <a href="#">
                <img src="/assets/icons/heart.svg" alt="Favorites" className="header__icon" />
              </a>
            </li>
            <li className="header__icon-item">
              <a href="#">
                <img src="/assets/icons/car.svg" alt="Cart" className="header__icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;