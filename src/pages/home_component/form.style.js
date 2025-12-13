import styled from 'styled-components';

// Styled components
export const StyledForm = styled.div`
    /* Styles for the form */
@import url("https://candyfonts.com/wp-data/2018/10/26/11538/HELR45W.ttf");
*{
    font-family: 'helvetica';
}

.generate {
    /* Styles for the generate button */
    background-color: #D179FF;
    margin-left: 65px;
    margin-right: 1210px;
    border-radius: 15px;
    text-align: center;
    height: 39px;   
}
`;

export const StyledButton = styled.button`
    /* Styles for the button */
    &.btn{
        background-color: #D179FF;
        border-radius: 15px;
    }
    /* Styles for the button hover */
    &.btn:hover {
    background-color: #9D53E3;
    }
`;

export const StyledInput = styled.input`
    /* Styles for the input */
`;

export const StyledContext = styled.div`
    /* Styles for the context */
`;

export const StyledNav = styled.nav`
    /* Styles for the nav elements */

    &.context1 {
        /* Styles for context1 */
        font-size: 20px;
        margin-top: 50px;
        margin-left: 60px;  
    }

    &.context2 {
        /* Styles for context2 */
        margin-left: 60px;
        margin-right: 60px; 
    }
`;

export const StyledTextArea = styled.textarea`
    /* Styles for the textarea */
`;