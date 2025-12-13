import { StyledDiv, StyledH1, StyledP1, StyledP2, StyledP3} from "./description2_about_app.style.js";

// Define the Description_about component
const DescriptionAbout = () => {
    return (
        <StyledDiv>
            <div className="des2">
                <StyledH1>Homepage</StyledH1>
                <StyledP1>On the homepage, the website begins with a strategically placed navbar, a component previously discussed on the welcome page. Following the navbar, an input field labeled "context" is provided, enabling users to enter their paragraphs. Adjacent to this input field, a "generate" button empowers users to generate the desired questions and answers. Subsequently, three buttons—namely "generated questions," "collections," and "history"—are presented. While the generated questions section is operational, the others are currently under construction.</StyledP1>
                
                <StyledP2>In the generated questions section, diverse questions are dynamically generated. Simultaneously, the history section offers insights into previous user actions on the website. Presently, the generated questions section permits users to provide answers to the generated questions. Post-answer submission, a "check answers" button facilitates the verification of user-provided responses. Activating this button triggers the system to generate answers to the previously generated questions. Additionally, a similarity score is displayed, providing users with an indication of the likeness between their answers and the system-generated responses.</StyledP2>

                <StyledP3>Towards the bottom of the page, a thoughtfully designed footer section is showcased. Highlighting the name "Edu Pulse" on the left side, it is followed by prominent social media links—Facebook, Instagram, Twitter, and LinkedIn. Positioned on the right side of this section are the contact number and email address, offering users a means to reach out to the relevant authorities for assistance with any difficulties they may encounter. This meticulous arrangement ensures a seamless user experience, combining functionality with an aesthetically pleasing design.</StyledP3>
            </div>
        </StyledDiv>
    );
};

export default DescriptionAbout;
