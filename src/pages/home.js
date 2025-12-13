//import different components of homepage
import Form from "./home_component/form";
import Context1 from "./home_component/generate_question";
import Question from "./home_component/question";
import Answer from "./home_component/check_answer";
import Answer1 from "./home_component/answer";
import Footer from "./home_component/footer/footer";
import FooterLogo from "./home_component/footer/footer_logo";
import SocialMedia from "./home_component/footer/social_media";
import FooterInfo from "./home_component/footer/monologue";
import Contact from "./home_component/footer/contact";


const Home = () => {
    return (
        <div>
            <Form />
            <Context1 />
            <Question />
            <Answer />
            <Answer1 />
            <Footer />
            <FooterLogo />
            <SocialMedia />
            <FooterInfo />
            <Contact />
        </div>
    )
}

export default Home;