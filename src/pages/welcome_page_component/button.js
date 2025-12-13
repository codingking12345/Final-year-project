import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from "./button.style.js";

// Styled component version of the button component
const Button = () => {
  return (
    <StyledButton>
      <section className="sign">
        <nav className="start">
          <Link className="nav-link" to="/home">Get started here</Link>
        </nav>
      </section>
    </StyledButton>
  );
};

export default Button;
