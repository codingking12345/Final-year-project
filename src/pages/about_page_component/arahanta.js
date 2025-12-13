import { StyledArahanta, StyledH1, StyledP, StyledP1 } from "./arahanta.style.js";

// Define the Arahanta component
const Arahanta = () => {
    return (
        <StyledArahanta>
            <div className="arahanta">
                <StyledH1>Arahanta Pokhrel</StyledH1>
                <StyledP>Level: BE Computer 4th Year</StyledP>
                <StyledP>Contact: </StyledP>
                <StyledP1>E-mail: </StyledP1>
            </div>
        </StyledArahanta>
    );
};

export default Arahanta;
