import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">

        <h2 className="stats-title">
          Proven Excellence. Trusted Worldwide.
        </h2>

        <div className="stats-grid">
          <div className="stat">
            <h3>3M+</h3>
            <p>Slides Designed</p>
          </div>

          <div className="stat">
            <h3>500+</h3>
            <p>Happy Clients Worldwide</p>
          </div>

          <div className="stat">
            <h3>4.9/5</h3>
            <p>Global Rating</p>
          </div>

          <div className="stat">
            <h3>15+</h3>
            <p>Years of Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}
