import Nav from "../Nav/Nav";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <Nav />
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>CONTACT US</h1>
          <p>We’d love to hear from you.</p>
        </div>
      </section>

      <section className="contact-container container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Email: support@codveda.com</p>
          <p>Phone: +20 123 456 789</p>
          <p>Location: Cairo, Egypt</p>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
