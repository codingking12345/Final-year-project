//import different components of about page
import Description1 from "./about_page_component/description1_about_app";
import Description2 from "./about_page_component/description2_about_app";
import Developer from "./about_page_component/developers";
import Abhishek from "./about_page_component/abhishek";
import Adhip from "./about_page_component/adhip";
import Arahanta from "./about_page_component/arahanta";
import Rishav from "./about_page_component/rishav";

const About_page = () => {
    return (
        <div>
            <Description1 />
            <Description2 />
            <Developer />
            <Abhishek />
            <Adhip />
            <Arahanta />
            <Rishav />
        </div>
    )
}

export default About_page;