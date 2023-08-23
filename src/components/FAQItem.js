import React from "react";
import dropDown from "../assets/drop.png";
import up from "../assets/up.png";

function FAQItem({ question, answer, isOpen, onItemClick }) {
  return (
    //  <div className="faq-item">
    //    <div className="faq-question" onClick={toggleAnswer}>
    //      {question} {isOpen ? '▲' : '▼'}
    //    </div>
    //    {isOpen && <div className="faq-answer">{answer}</div>}
    //  </div>

    <div className="faqsWrapper">
      <div className="faqQuestion">
        <h1>{question}</h1>
        <div className="dropDown" onClick={onItemClick}>
          <p>{isOpen ? "▲" : "▼"}</p>
        </div>
      </div>
      {isOpen && (
        <div className="faqAnswer">
          <h1>{answer}</h1>
        </div>
      )}
    </div>
  );
}

export default FAQItem;
