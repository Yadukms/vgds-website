import "./OurWork.css";

export default function OurWork() {
  return (
    <main className="ourwork">

      {/* HERO SECTION */}
      <section className="ourwork-hero">
        <div className="ourwork-hero-content">
          <span className="breadcrumb">Our Works</span>

          <h1>
            Work That Inspires.<br />
            Impact That Lasts.
          </h1>

          <p>
            Explore a curated selection of our finest work — from visually
            striking presentations to strategic brand designs. At VGDS Global,
            each project reflects our commitment to creativity, precision, and
            results.
          </p>
        </div>

        <div className="ourwork-hero-image">
          <img src="/ourwork/hero-illustration.png" alt="Our Work" />
        </div>
      </section>

      {/* WORK LIST SECTION */}
      <section className="ourwork-gallery">

        {/* LEFT FILTER */}
        <aside className="ourwork-filters">
          {[
            "All",
            "Branding Templates",
            "Brochure",
            "Business Presentation",
            "Company Profile",
            "Corporate Presentation",
            "Data Visualization",
            "Graphic Design",
            "Pitch Deck Design",
            "Sales Design",
            "Strategy Deck",
            "Training Deck",
            "Toolkit",
          ].map((item, i) => (
            <button key={i} className={i === 0 ? "active" : ""}>
              {item}
            </button>
          ))}
        </aside>

        {/* RIGHT GRID */}
        <div className="ourwork-grid">
          {[
            { img: "pitch-deck-1.png", title: "Pitch Deck Design" },
            { img: "training-deck-1.png", title: "Training Deck" },
            { img: "strategy-deck-1.png", title: "Strategy Deck" },
            { img: "launch-plan.png", title: "Launch Plan" },
            { img: "corporate.png", title: "Corporate Presentation" },
            { img: "business.png", title: "Business Presentation" },
          ].map((work, i) => (
            <div className="work-card" key={i}>
              <img src={`/ourwork/${work.img}`} alt={work.title} />
              <p>{work.title}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
