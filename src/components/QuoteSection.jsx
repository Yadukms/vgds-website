import "./QuoteSection.css";

export default function QuoteSection() {
  return (
    <section className="quote">
      <div className="quote-inner">

        <p className="quote-text">
          With 15+ years designing for firms like McKinsey, BCG, EY, and Deloitte,
          we know how to make an impact. We combine{" "}
          <strong>sharp storytelling</strong>{" "}
          with expert design to craft slides that are clear, compelling, and
          unforgettable—perfect for pitches, boardrooms, or investor decks.
        </p>

        <div className="quote-author">
          <img
            src="/team/jeslin.jpg"   /* 🔁 replace with your image */
            alt="Jeslin Mathews Rajan"
          />
          <div className="author-text">
            <div className="author-name">Jeslin Mathews Rajan</div>
            <div className="author-role">CEO, VGDS Global</div>
          </div>
        </div>

      </div>
    </section>
  );
}
