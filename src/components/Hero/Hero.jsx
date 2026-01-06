import "./Hero.css";

const col1 = [
  "/hero/img1.png",
  "/hero/img2.png",
  "/hero/img3.png",
  "/hero/img4.png",
];

const col2 = [
  "/hero/img5.png",
  "/hero/img6.png",
  "/hero/img1.png",
  "/hero/img2.png",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* TEXT */}
        <div className="hero-content">
          <h1>
            Impactful Designs.<br />
            Powerful Presentations.<br />
            Game-Changing Results.
          </h1>

          <p>
          At Visual Graphics Design Services Global, we craft stunning, high-impact presentations that captivate and persuade. Our expert designers deliver top-tier quality—fast, affordable, and hassle-free. From pitch decks to corporate reports, we turn content into compelling visuals that make every slide stand out.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Book a Meeting</button>
            <button className="btn-outline">Submit Enquiry</button>
          </div>
        </div>

        {/* DESKTOP IMAGE RAIL */}
        <div className="hero-rail">
          <div className="rail-col scroll-up">
            {[...col1, ...col1].map((img, i) => (
              <div className="rail-card" key={i}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>

          <div className="rail-col scroll-down">
            {[...col2, ...col2].map((img, i) => (
              <div className="rail-card" key={i}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ MOBILE HORIZONTAL SCROLL (YOU MISSED THIS) */}
        <div className="hero-mobile-strip">
          {[...col1, ...col2, ...col1, ...col2].map((img, i) => (
            <div className="mobile-card" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
