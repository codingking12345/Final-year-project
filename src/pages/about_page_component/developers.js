import { StyledDeveloper, StyledH1 } from "./developers.style.js";

// Define the Developer component
const Developer = () => {
    return (
        <StyledDeveloper>
            <div className="developer">
                <StyledH1>Name of Developers</StyledH1>
            </div>
        </StyledDeveloper>
    );
};

export default Developer;
