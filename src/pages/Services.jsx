import "./Services.css";
import OurProcess from "../components/OurProcess";
import servicesHero from "/images/services/services-hero.png";
import presentationImg from "/images/services/presentation-design.jpg";
import graphicsImg from "/images/services/graphics-design.jpg";
import otherServicesImg from "/images/services/other-services.jpg";

export default function Services() {
  return (
    <main className="services-page">
      
      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <div className="services-hero-text">
            <span className="services-eyebrow">Our Services</span>
            <h1>
              Designs That Speak.<br />
              Results That Matter.
            </h1>
            <p>
              At VGDS Global, a leading PowerPoint Presentation Design Agency in
              USA, we specialize in creating impactful presentations and
              compelling designs that elevate your brand and resonate with your
              audience.
            </p>
          </div>

          <div className="services-hero-image">
            <img src={servicesHero} alt="Services Illustration" />
          </div>
        </div>
      </section>

      {/* PRESENTATION DESIGN */}
      <section className="service-section">
        <div className="service-grid">
          <div className="service-content">
            <h2>Presentation Design</h2>
            <p className="service-sub">
              Purpose-driven slides that inform, inspire, and leave a lasting
              impression.
            </p>

            <ul className="service-list">
              <li><strong>Business Presentations</strong> – Clear, impactful decks</li>
              <li><strong>Investor Pitch Decks</strong> – Vision-focused storytelling</li>
              <li><strong>Templates</strong> – PowerPoint & Google Slides</li>
              <li><strong>Interactive & Video</strong> – Motion-driven slides</li>
            </ul>

            <button className="service-btn">Explore Service</button>
          </div>

          <div className="service-image">
            <img src={presentationImg} alt="Presentation Design" />
          </div>
        </div>
      </section>

      {/* GRAPHICS & PRINT */}
      <section className="service-section light">
        <div className="service-grid reverse">
          <div className="service-image">
            <img src={graphicsImg} alt="Graphics Design" />
          </div>

          <div className="service-content">
            <h2>Graphics & Print Design</h2>
            <p className="service-sub">
              Creative visuals that strengthen your brand across platforms.
            </p>

            <ul className="service-list">
              <li><strong>Brand Identity</strong> – Logos & systems</li>
              <li><strong>Marketing Collaterals</strong> – Flyers & brochures</li>
              <li><strong>Social Media Graphics</strong></li>
              <li><strong>Digital & Print Media</strong></li>
            </ul>

            <button className="service-btn">Explore Service</button>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="service-section">
        <div className="service-grid">
          <div className="service-content">
            <h2>Other Services</h2>
            <p className="service-sub">
              Supportive creative and technical services that enhance workflow.
            </p>

            <ul className="service-list">
              <li><strong>Content Services</strong></li>
              <li><strong>Data / Document Management</strong></li>
              <li><strong>Website Design</strong></li>
              <li><strong>Video Design</strong></li>
            </ul>

            <button className="service-btn">Explore Service</button>
          </div>

          <div className="service-image">
            <img src={otherServicesImg} alt="Other Services" />
          </div>
        </div>
      </section>

      {/* OUR PROCESS (REUSED) */}
      <OurProcess />
      {/* VISUAL GRAPHICS STORY SECTION */}
<section className="services-story">
  <div className="services-story-inner">
    
    <div className="services-story-image">
      <img
        src="/images/services/visual-graphics-team.jpg"
        alt="Visual Graphics Design Team"
      />
    </div>

    <div className="services-story-content">
      <h2>
        At Visual Graphics Design Services, we don’t just create
        presentations—we craft visual stories that inform, inspire,
        and persuade.
      </h2>

      <p>
        With over 15 years of experience designing for top firms like
        McKinsey & Co., BCG, EY and Deloitte, we know what it takes to
        make an impact. We blend sharp storytelling with expert design,
        ensuring every slide is clear, compelling, and memorable.
      </p>

      <p>
        Our team isn’t just skilled—we’re obsessed with turning ideas
        into powerful visuals that leave a lasting impression. Whether
        it’s a high-stakes pitch, a boardroom presentation or an
        investor deck, we transform content into captivating narratives
        that drive results.
      </p>
    </div>

  </div>
</section>


    </main>
  );
}
