import { StyledNav,StyledButton } from "./generate_question.style.js";

// Styled component version of the Context1 component
const Context1 = () => {
    return (
        <StyledNav>
                <nav className="button-box">
                    <nav id="btn"></nav>
                    <nav className="button">
                    <StyledButton type="button" className="btn" >Generated Questions</StyledButton>
                    <StyledButton type="button" className="btn" >Collections</StyledButton>
                    <StyledButton type="button" className="btn" >History</StyledButton>
                    </nav>
                </nav>
        </StyledNav>
    );
}

export default Context1;
