import "./Solutions.css";

const solutions = [
  {
    title: "Presentation Design",
    subtitle: "Crafted to Impress. Designed to Win.",
    desc:
      "At VGDS Global, we create custom slide designs that perfectly reflect your brand’s identity while delivering unforgettable presentations that captivate and persuade.",
    img: "/solutions/presentation.jpg",
  },
  {
    title: "Graphic Design",
    subtitle: "Visuals That Speak Volumes.",
    desc:
      "From print to digital, our graphic design services amplify your brand’s presence, ensuring your message resonates and engages your audience like never before.",
    img: "/solutions/graphic.jpg",
  },
  {
    title: "Dedicated Design Team",
    subtitle: "Your Brand. Our Focus.",
    desc:
      "Partner with VGDS Global’s dedicated design team, ensuring consistency and exceptional quality across every project.",
    img: "/solutions/team.jpg",
  },
];

export default function Solutions() {
  return (
    <section className="solutions">
      <div className="solutions-inner">

        {/* HEADER */}
        <div className="solutions-header">
          <h2>Solutions We Provide</h2>
          <a href="/" className="learn-more">
            Learn More →
          </a>
        </div>

        {/* GRID */}
        <div className="solutions-grid">
          {solutions.map((item, i) => (
            <div className="solution-card" key={i}>
              <img src={item.img} alt={item.title} />

              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
