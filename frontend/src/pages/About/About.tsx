import BannerItem from "../../components/BannerItem/BannerItem";
import Support from "../../components/Support/Support";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <BannerItem
        imgUrl="/assets/images/RectangleImage.png"
        icon="/assets/icons/arrow.svg"
        title="About"
        linkHome="/"
        linkShop="/about"
        type="2"
      />

      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>About Our Furniro</h2>
            <p>
              At Furniro, we believe that a well-furnished space has the power to
              transform your daily living experience. Established with a passion
              for exceptional furniture design and quality craftsmanship, we've
              been serving our customers since 2000.
            </p>
            <p>
              Our collection features carefully curated pieces that blend
              aesthetics with functionality, ensuring that every item not only
              looks beautiful but also serves its purpose effectively.
            </p>
          </div>
          <div className="about-image">
            <img src="/assets/images/about-1.jpg" alt="About Furniro" />
          </div>
        </div>

        <div className="features-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="/assets/icons/trophy.svg" alt="High Quality" />
              <h3>High Quality</h3>
              <p>Crafted with premium materials and exceptional attention to detail</p>
            </div>
            <div className="feature-card">
              <img src="/assets/icons/guarantee.svg" alt="Warranty Protection" />
              <h3>Warranty Protection</h3>
              <p>Shop with confidence with our comprehensive warranty coverage</p>
            </div>
            <div className="feature-card">
              <img src="/assets/icons/shipping.svg" alt="Free Shipping" />
              <h3>Free Shipping</h3>
              <p>Enjoy free shipping on all orders within the United States</p>
            </div>
            <div className="feature-card">
              <img src="/assets/icons/support.svg" alt="24/7 Support" />
              <h3>24/7 Support</h3>
              <p>Our dedicated team is here to help you anytime you need</p>
            </div>
          </div>
        </div>
      </div>

      <Support />
    </section>
  );
};

export default About;