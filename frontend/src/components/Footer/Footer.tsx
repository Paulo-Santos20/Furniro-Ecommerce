import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content-details">
        <nav className="footer__nav">
          <div className="footer__address">
            <h3 className="footer__title">Furniro.</h3>
            <ul className="footer__text">
              <li>
                400 University Drive Suite 200 Coral <br /> Gables,
                <br /> FL 33134 USA
              </li>
            </ul>
          </div>
          <ul className="footer__list">
            <li className="footer__item-title">Links</li>
            <li className="footer__item">
              <Link to={"/home"}> Home</Link>
            </li>
            <li className="footer__item">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="footer__item">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="footer__item">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item-title">Help</li>
            <li className="footer__item">
              <Link to={"#"}> Payment Options</Link>
            </li>
            <li className="footer__item">
              <Link to={"#"}>Returns</Link>
            </li>
            <li className="footer__item">
              <Link to={"#"}>Privacy Policies</Link>
            </li>
          </ul>
          <form className="footer__newsletter-form">
            <li className="footer__item-title">Newsletter</li>
            <div className="footer__newsletter-content">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="footer__newsletter-input"
              />
              <button className="footer__newsletter-button">SUBSCRIBE</button>
            </div>
          </form>
        </nav>
        <div className="footer__separator"></div>
        <p className="footer__copy">2023 furnino. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;