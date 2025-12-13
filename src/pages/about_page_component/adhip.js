import { StyledAdhip, StyledH1, StyledP, StyledP1 } from "./adhip.style.js";

// Define the Adhip component
const Adhip = () => {
    return (
        <StyledAdhip>
            <div className="adhip">
                <StyledH1>Adhip Bhattarai</StyledH1>
                <StyledP>Level: BE Computer 4th Year</StyledP>
                <StyledP>Contact: </StyledP>
                <StyledP1>E-mail: </StyledP1>
            </div>
        </StyledAdhip>
    );
};

export default Adhip;
