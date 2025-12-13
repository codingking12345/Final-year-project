import { StyledSocialMedia } from "./social_media.style.js";

// Styled component version of the social media component
const SocialMedia = () => {
    return (
        <StyledSocialMedia>
            <div className="social_media">
                <img src="/image/fb.jpg" height="20" type="button" alt="" />
                <img src="/image/insta.jpg" height="20" type="button" alt="" />
                <img src="/image/x.jpg" height="20" type="button" alt="" />
                <img src="/image/in.jpg" height="20" type="button" alt="" />
            </div>
        </StyledSocialMedia>
    );
}

export default SocialMedia;
