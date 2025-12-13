import { StyledImageContainer, StyledImage } from "./image1.style.js";

// Images1 component
const Images1 = () => {
    return (
        <StyledImageContainer>
            <div className="image1">
                <StyledImage src="/image/img1.jpg" height="350" width="500" alt="" />
            </div>
        </StyledImageContainer>
    );
};

export default Images1;
