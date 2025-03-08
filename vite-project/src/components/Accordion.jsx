import React, { useState } from "react";
import "../styles/Accordion.css";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <h2 onClick={toggleAccordion} className="accordion-header">
        {title}
      </h2>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;