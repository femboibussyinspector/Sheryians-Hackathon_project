// Components/FlipCard.jsx
import React, { useState } from "react";
import classNames from "classnames";

const FlipCard = ({ image, fact }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-80 perspective cursor-pointer"
    >
      <div
        className={classNames(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          { "rotate-y-180": flipped }
        )}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
          <img src={image} alt="Race" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-center text-white p-2">
            Click for a fact
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-yellow-200 rounded-lg p-4 flex items-center justify-center text-black font-semibold">
          {fact}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
