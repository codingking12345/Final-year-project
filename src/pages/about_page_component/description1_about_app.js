import { StyledDiv, StyledH1, StyledP1, StyledP2, StyledP3 } from "./description1_about_app.style.js";

// Define the styled component for the entire Description_about component
const DescriptionAbout = () => {
    return (
        <StyledDiv>
            <div className="des">
                <StyledH1>Welcome Page</StyledH1>

                <StyledP1>Welcome to Edu Pulse, where educational excellence meets innovation! As you embark on your journey through our website, you'll be greeted by a welcoming homepage, featuring a sleek navbar proudly displaying our project's name in bold block letters. Navigate seamlessly through the various pages—Home, Contact, About, Blog, Product, Pricing, and Resources—although currently, only the homepage is fully developed. Stay tuned as we diligently work to bring you comprehensive content on all fronts in the near future.</StyledP1>

                <StyledP2>Beyond the navbar, a warm block-lettered greeting awaits, accompanied by a concise introduction to Edu Pulse, setting the stage for the educational adventure that lies ahead. Ready to dive in? Simply locate the strategically placed get started here button and join our vibrant community.</StyledP2>

                <StyledP3>Exciting developments are on the horizon! Keep an eye on the bottom right corner, where a chatbot icon promises future assistance with your queries. Although it's currently under construction, rest assured that this interactive feature will soon be enhanced to provide seamless support, ensuring a user-friendly and informative experience for all. Welcome to Edu Pulse—a space where learning thrives, and the future of education unfolds.</StyledP3>
            </div>
        </StyledDiv>
    );
};

export default DescriptionAbout;
