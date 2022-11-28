import React, { useState } from "react";
import Image from "next/image";

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
        <div className="accordion-pic p-2 bg-[rgba(255,255,255,0.1)] text-white text-lg flex">
          {content.folks.map(({ key, details }) => {
            return (
              <div
                key={key}
                className="p-2 hover:animate-pulse rounded-2xl m-4 bg-gradient-to-b from-tedxred to-black"
              >
                <Image
                  src={details.pic}
                  alt={`${details.name} pic`}
                  width={100}
                  height={100}
                  className="rounded-full h-[100px]"
                />
                <div className="bg-[rgba(0,0,0,0.3)] text-center">
                  {details.name}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {isActive && <div className="accordion-content">{content.info}</div>}
    </div>
  );
};

export default Accordion;
