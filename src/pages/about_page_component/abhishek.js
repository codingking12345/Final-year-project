import { StyledAbhishek, StyledH1, StyledP, StyledP1 } from "./abhishek.style.js";

// Define the Abhishek component
const Abhishek = () => {
    return (
        <StyledAbhishek>
            <div className="abhishek">
                <StyledH1>Abhishek Chaudhary</StyledH1>
                <StyledP>Level: BE Computer 4th Year</StyledP>
                <StyledP>Contact: 9840327478</StyledP>
                <StyledP1>E-mail: abhichaudhary056@gmail.com</StyledP1>
            </div>
        </StyledAbhishek>
    );
};

export default Abhishek;
