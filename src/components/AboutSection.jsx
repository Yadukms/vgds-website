import { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        } else {
          setActive(false); // 🔥 reset when fully out
        }
      },
      {
        threshold: 0,
           rootMargin: "-65% 0px -65% 0px",  // section must be clearly entered
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className="about-inner">
        <div className="about-image">
          <img src="/about/about-1.jpg" alt="Team working" />
        </div>

        <div className="about-content">
          <h2 className="about-title">
            At{" "}
            <span className={`highlight ${active ? "is-active" : ""}`}>
              Visual Graphics Design Services
            </span>
            , we don’t just create presentations—we craft visual stories that
            inform, inspire, and persuade.
          </h2>

          <p className="about-text">
            With over 15 years of experience designing for top firms like
            McKinsey & Co., BCG, EY and Deloitte, we know what it takes to make an
            impact. As the Best Presentation Design Agency in USA, we blend sharp
            storytelling with expert design, ensuring every slide is clear,
            compelling, and memorable. Our team isn’t just skilled—we’re obsessed
            with turning ideas into powerful visuals that leave a lasting
            impression. Recognized as a leading PowerPoint Design Agency in USA,
            we transform high-stakes pitches, boardroom presentations, and
            investor decks into captivating narratives that drive results.
          </p>
        </div>
      </div>
    </section>
  );
}
