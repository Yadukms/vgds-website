import "./ServicesSection.css";

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="services-inner">

        <div className="services-header">
          <h2>Services We Offer</h2>
          <a href="#" className="learn-more">
            Learn More →
          </a>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-image">
              <img
                src="/presentation/img-1.jpg"
                alt="Presentation Experts on Demand"
              />
            </div>
            <h3>Presentation Experts on Demand</h3>
            <p className="subtitle">Expert Designs. Anytime You Need Them.</p>
            <a href="#">Learn More →</a>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img
                src="/presentation/img-2.jpg"
                alt="Overnight Presentations"
              />
            </div>
            <h3>Overnight Presentations</h3>
            <p className="subtitle">
              Stunning Designs. Lightning-Fast Delivery.
            </p>
            <a href="#">Learn More →</a>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img
                src="/presentation/img-3.jpg"
                alt="Dedicated Design Team Subscription"
              />
            </div>
            <h3>Dedicated Design Team Subscription</h3>
            <p className="subtitle">
              Expert Design Support Tailored to Your Brand.
            </p>
            <a href="#">Learn More →</a>
          </div>

        </div>
      </div>
    </section>
  );
}
