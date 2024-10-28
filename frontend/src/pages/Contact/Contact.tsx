import BannerItem from "../../components/BannerItem/BannerItem";
import Support from "../../components/Support/Support";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log("Form submitted");
  };

  return (
    <section className="contact-page">
      <BannerItem
        imgUrl="/assets/images/RectangleImage.png"
        icon="/assets/icons/arrow.svg"
        title="Contact"
        linkHome="/"
        linkShop="/contact"
        type="2"
      />

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            We'd love to hear from you. Our friendly team is always here to chat.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <img src="/assets/icons/email.svg" alt="Email" />
              <h3>Chat to us</h3>
              <p>Our friendly team is here to help.</p>
              <a href="mailto:hi@furniro.com">hi@furniro.com</a>
            </div>

            <div className="contact-method">
              <img src="/assets/icons/office.svg" alt="Office" />
              <h3>Office</h3>
              <p>Come say hello at our office HQ.</p>
              <address>
                100 Smith Street<br />
                Collingwood VIC 3066 AU
              </address>
            </div>

            <div className="contact-method">
              <img src="/assets/icons/phone.svg" alt="Phone" />
              <h3>Phone</h3>
              <p>Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+1-202-555-0123">+1 (202) 555-0123</a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} required></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Support />
    </section>
  );
};

export default Contact;