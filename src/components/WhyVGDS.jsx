import { useState } from "react";
import Lottie from "lottie-react";
import "./WhyVGDS.css";

/* LOTTIE JSON — DIRECTLY FROM SRC */
import saveTimeAnim from "../lottie/save-time.json";
import professionalAnim from "../lottie/professional-design.json";
import confidentialityAnim from "../lottie/confidentiality.json";
import costAnim from "../lottie/cost-efficiency.json";
import fastAnim from "../lottie/fast-delivery.json";

const ITEMS = [
  {
    title: "Save Time",
    description:
      "Focus on what you do best — we’ll handle the design. Leave your graphic needs to our expert team and reclaim your time.",
    animation: saveTimeAnim,
  },
  {
    title: "Professional Design",
    description:
      "Get world-class presentation designs crafted by experienced professionals who understand business storytelling.",
    animation: professionalAnim,
  },
  {
    title: "Confidentiality",
    description:
      "Your data and ideas are protected with strict confidentiality protocols at every stage of engagement.",
    animation: confidentialityAnim,
  },
  {
    title: "Cost Efficiency",
    description:
      "High-quality design without the overhead of hiring and managing an in-house design team.",
    animation: costAnim,
  },
  {
    title: "Fast Delivery",
    description:
      "Tight deadlines are not a problem. We deliver polished presentations at speed, without compromise.",
    animation: fastAnim,
  },
];

export default function WhyVGDS() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="why">
      <div className="why-inner">
        {/* HEADER */}
        <div className="why-header">
          <h2>Why VGDS?</h2>
          <a href="#" className="why-link">
            More about the company →
          </a>
        </div>

        {/* CONTENT */}
        <div className="why-content">
          {/* LEFT */}
          <div className="why-left">
            {ITEMS.map((item, index) => (
              <button
                key={index}
                className={`why-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <h3>{item.title}</h3>

                {index === activeIndex && (
                  <p>{item.description}</p>
                )}

                <span
                  className={`divider ${
                    index === activeIndex ? "active" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="why-right">
            <Lottie
              animationData={ITEMS[activeIndex].animation}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
