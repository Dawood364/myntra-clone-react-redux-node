import React from "react";

const HeroImage = () => {
  return (
    <>
      <div className="RightLeftSet">
        <img
          src="/images/left hero image.webp"
          alt="Top Bag"
          className="imgs1"
        />
        <img
          src="/images/right hero image.webp"
          alt="Top Bag"
          className="imgs1"
        />
      </div>
      <div className="FlipedContainer">
        <img src="/images/fliped.webp" alt="Top Bag" className="flipedimg" />
      </div>
    </>
  );
};

export default HeroImage;
