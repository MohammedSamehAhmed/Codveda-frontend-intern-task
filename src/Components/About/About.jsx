import Nav from "../Nav/Nav";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <Nav />
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>OUR STORY</h1>
          <p>Crafting style that speaks your personality.</p>
        </div>
      </section>

      <section className="about-story container">
        <div className="about-story-text">
          <h2>Who We Are</h2>
          <p>
            Founded in 2024, CODVEDA was created to redefine everyday fashion.
            We believe style is more than clothing — it's confidence, identity,
            and self-expression.
          </p>
          <p>
            Our mission is to deliver premium quality pieces that combine
            comfort, elegance, and modern trends for everyone.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat">
          <h2>200+</h2>
          <p>Stores</p>
        </div>
        <div className="stat">
          <h2>3000+</h2>
          <p>Products</p>
        </div>
        <div className="stat">
          <h2>40k+</h2>
          <p>Customers</p>
        </div>
      </section>

      <section className="about-features container">
        <h2 className="features-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="pi pi-star"></i>
            <h3>Premium Quality</h3>
            <p>High-quality materials crafted with attention to detail.</p>
          </div>
          <div className="feature">
            <i className="pi pi-truck"></i>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping worldwide.</p>
          </div>
          <div className="feature">
            <i className="pi pi-lock"></i>
            <h3>Secure Payment</h3>
            <p>Safe and encrypted payment methods.</p>
          </div>
          <div className="feature">
            <i className="pi pi-headphones"></i>
            <h3>24/7 Support</h3>
            <p>We’re always here to help you anytime.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to upgrade your style?</h2>
        <Link to="/" className="cta-btn">
          Shop Now
        </Link>
      </section>
    </div>
  );
}
