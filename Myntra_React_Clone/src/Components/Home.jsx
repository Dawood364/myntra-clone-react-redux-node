import React from "react";
import HomeItem from "./HomeItem";
import { useSelector } from "react-redux";
import HeroImage from "./HeroImage";
import ImageSlider from "./ImageSlider";
import ImageGalleryFlex from "./FlipingImagesAll";
const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <div>
      <main>
        <img src="/images/bagges.webp" alt="Top Bag" className="TopBaj" />
        <HeroImage />
        <ImageSlider />
        <ImageGalleryFlex />
        <div className="items-container">
          <img
            src="/images/shopy By categiry.webp"
            alt="Top Bag"
            className="TopBaj"
          />
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
