//import different components of welcome page
import Description from "./welcome_page_component/description";
import Button from "./welcome_page_component/button";
import Images1 from  "./welcome_page_component/image1";
import Images from  "./welcome_page_component/image";

const Welcome_page = () => {
    return (
        <div>
            <Description />
            <Button />
            <Images1 />
            <Images />
        </div>
    )
}

export default Welcome_page;