import { StyledContact, StyledMail } from "./contact.style.js";

// Styled component version of the contact component
const Contact = () => {
    return (
        <div>
            <StyledContact>
                <div className="contact">
                    <img src="/image/contact.jpg" height="25" type="button" alt="" />
                    <p type="button" >01-4052983</p>
                </div>
            </StyledContact>
            <StyledMail>
                <div className="mail">
                    <img src="/image/mail.jpg" height="25" type="button" alt="" />
                </div>
                <p className="mail_address" type="button" >edupulse@gmail.com</p>
            </StyledMail>
        </div>
    );
}

export default Contact;
