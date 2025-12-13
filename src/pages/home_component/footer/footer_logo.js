import { StyledFooterLogo } from "./footer_logo.style.js";

// Styled component version of the footer logo component
const FooterLogo = () => {
    return (
        <StyledFooterLogo>
            <div className="footer_logo">
                <img src="/image/logo.jpg" alt="" />
            </div>
        </StyledFooterLogo>
    );
}

export default FooterLogo;
