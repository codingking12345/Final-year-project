import { StyledButtonContainer, StyledButton } from "./check_answer.style.js";

// Styled component version of the Answer component
const Answer = () => {
    return (
        <StyledButtonContainer className="btn1">
            <StyledButton type="button" className="btn">Check Answers</StyledButton>
        </StyledButtonContainer>
    );
}

export default Answer;
