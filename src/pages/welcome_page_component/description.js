import React from 'react';
import { StyledDescription } from "./description.style.js";

// Styled component version of the description component
const Description = () => {
  return (
    <StyledDescription>
      <section className="description">
        <nav className="welcome1">
          <p>Welcome to the ultimate Q&A hub, where your questions meet swift answers!</p>
        </nav>
        <nav className="welcome2">
          <p>The one-stop destination for all your queries! Dive into a world of instant solutions, expert advice, and community-driven knowledge. Ask away and let the answers come to you!</p>
        </nav>
      </section>
    </StyledDescription>
  );
};

export default Description;
