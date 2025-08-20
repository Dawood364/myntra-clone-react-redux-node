import React from "react";

const images = [
  { src: "/FlipImages/level1.gif", title: "Trouser" },
  { src: "/FlipImages/leve2.gif", title: "Top" },
  { src: "/FlipImages/level3.gif", title: "Kurta" },
  { src: "/FlipImages/7.Mens-T-Shirts.gif", title: "Mens Shirt" },
  { src: "/FlipImages/Category_Boys_Clothing.gif", title: "Kid Shirt" },
  { src: "/FlipImages/Category_Casual_Shoes.gif", title: "Shoes" },
  { src: "/FlipImages/Category_HandBags.gif", title: "Bags" },
  { src: "/FlipImages/Category_Gilrs_Clothing.gif", title: "Girls Shiirt" },
  { src: "/FlipImages/Category_Men_Casual_Shirt.gif", title: "Mens Shirt" },
  { src: "/FlipImages/1.gif", title: "Kurta" },
  { src: "/FlipImages/2.gif", title: "shoes" },
  { src: "/FlipImages/3.gif", title: "Beauty" },
];

const ImageGalleryFlex = () => {
  return (
    <>
      <center>
        <h1 className="heading">Top Products</h1>
      </center>

      <div style={styles.flexContainer}>
        {images.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.src} alt={`img-${index}`} style={styles.image} />
            <p style={styles.title}>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  card: {
    width: "calc(100% / 6 - 10px)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "6px",
  },
  title: {
    marginTop: "5px",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default ImageGalleryFlex;
