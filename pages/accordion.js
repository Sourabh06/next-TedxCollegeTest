import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item team-win-btn">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {/* {console.log(content)} */}
      {isActive && (
        <div className="accordion-pic hover:animate-pulse rounded-2xl m-4 w-10 h-10 p-2 bg-gradient-to-b from-tedxred to-black">
          {content.pic}
        </div>
      )}
      {isActive && <div className="accordion-content">{content.info}</div>}
    </div>
  );
};

export default Accordion;
