import { useEffect, useRef, useState } from "react";
import "./OurProcess.css";

const STEPS = [
  {
    title: "Content Submission",
    description:
      "Send us your draft in any format – PPT, Word, or even email. We will take it from there.",
  },
  {
    title: "Pricing & Timeline",
    description:
      "Our project manager connects with you to finalize pricing and set clear timelines.",
  },
  {
    title: "Sample Slides",
    description:
      "We create engaging sample slides for your review and feedback.",
  },
  {
    title: "Revisions & Feedback",
    description:
      "We refine the slides based on your feedback, ensuring everything meets your expectations.",
  },
  {
    title: "Final Delivery",
    description:
      "After thorough checks and final edits, we deliver a polished presentation that makes an impact.",
  },
];

export default function OurProcess() {
  const wrapperRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);
  const [stepTops, setStepTops] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Measure checkpoints (desktop + mobile) */
  const measure = () => {
    if (!lineRef.current) return;

    const lineTop =
      lineRef.current.getBoundingClientRect().top + window.scrollY;

    const tops = stepRefs.current.map((step) => {
      const rect = step.getBoundingClientRect();
      return rect.top + window.scrollY - lineTop + rect.height / 2;
    });

    setStepTops(tops);
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* Scroll logic */
  // useEffect(() => {
  //   const onScroll = () => {
  //     const mid = window.scrollY + window.innerHeight / 2;

  //     stepRefs.current.forEach((step, index) => {
  //       if (!step) return;
  //       const rect = step.getBoundingClientRect();
  //       const top = rect.top + window.scrollY;
  //       const bottom = top + rect.height;

  //       if (mid >= top && mid <= bottom) {
  //         setActiveIndex(index);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   onScroll();

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
useEffect(() => {
  const onScroll = () => {
    if (!wrapperRef.current || stepTops.length === 0) return;

    const section = wrapperRef.current;
    const rect = section.getBoundingClientRect();
    
    // 1. Detect if we are above or below the section to set initial dot position
    if (rect.top > window.innerHeight) {
      setActiveIndex(0); // Above section: dot at top
      return;
    }
    if (rect.bottom < 0) {
      setActiveIndex(STEPS.length - 1); // Below section: dot at bottom
      return;
    }

    // 2. Trigger point (30% from top of screen) for active step
    const triggerPoint = window.innerHeight * 0.3;
    
    let newIndex = 0;
    stepRefs.current.forEach((step, index) => {
      if (!step) return;
      const stepRect = step.getBoundingClientRect();
      
      // If the top of the step has crossed our trigger line, it becomes active
      if (stepRect.top < triggerPoint) {
        newIndex = index;
      }
    });

    setActiveIndex(newIndex);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Run immediately on mount

  return () => window.removeEventListener("scroll", onScroll);
}, [stepTops]);










  return (
    <section className="process">
      <h2 className="process-title">Our Process</h2>

      <div className="process-wrapper" ref={wrapperRef}>
        {/* LINE + DOT */}
        <div className="process-line" ref={lineRef}>
          {stepTops.map((top, i) => (
            <span
              key={i}
              className="process-checkpoint"
              style={{ top }}
            />
          ))}

          {stepTops.length > 0 && (
            <span
              className="process-dot"
              style={{ top: stepTops[activeIndex] }}
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="process-steps">
          {STEPS.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`process-step ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
