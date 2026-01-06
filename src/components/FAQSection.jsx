import { useState } from "react";
import "./FAQSection.css";

const FAQS = [
  {
    question: "Do you write the content for the presentation as well?",
    answer:
      "Yes. Our team can handle content creation, storytelling, and structuring in addition to visual design.",
  },
  {
    question: "Will I receive an editable PowerPoint file?",
    answer:
      "Absolutely. You will receive a fully editable PowerPoint file upon project completion.",
  },
  {
    question: "How long does it take to design a 20-slide presentation?",
    answer:
      "Typically between 3–5 business days depending on complexity and feedback cycles.",
  },
  {
    question: "Can you sign an NDA for my confidential project?",
    answer:
      "Yes. We regularly work under NDAs and take confidentiality very seriously.",
  },
  {
    question: "Can you meet tight deadlines?",
    answer:
      "Yes. We specialize in fast turnarounds without compromising quality.",
  },
  {
    question: "What are your timelines?",
    answer:
      "Timelines vary by scope, but we always align expectations before starting.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-inner">
        {/* LEFT */}
        <div className="faq-title">
          <h2>
            Frequently
            <br />
            Asked Questions
          </h2>
        </div>

        {/* RIGHT */}
        <div className="faq-list">
          {FAQS.slice(0, 5).map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="icon">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          {/* VISUAL ONLY */}
          <div className="faq-load-more">
            Load More ↓
          </div>
        </div>
      </div>
    </section>
  );
}
