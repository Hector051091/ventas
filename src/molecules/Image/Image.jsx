import React from "react";

const Image = ({ title, image }) => {

  return (
    <img
      src={image}
      alt={title}
      className="product-image"
      width={200}
      height={200}
    />
  );
};

export default Image;
