import React from 'react';
import { StyledImages } from "./image.style.js";

// Styled component version of the images component
const Images = () => {
  return (
    <StyledImages>
      <div className="image">
        <img src="/image/msg.jpg" alt="" />
      </div>
    </StyledImages>
  );
};

export default Images;
