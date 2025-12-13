import styled from 'styled-components';

// Styled components
export const StyledNav = styled.nav`
    /* Styles for the button box */
@import url("https://candyfonts.com/wp-data/2018/10/26/11538/HELR45W.ttf");
*{
    font-family: 'helvetica';
}

/* Styles for the button box */
    .button-box {
        position: relative;
        width: 360px;
        margin: 35px auto;
        box-shadow: 0 0 20px 9px #ff61241f;
        border-radius: 15px;
        height: 39px;
    }
    .button{
        background: transparent;
        border: 0;
        outline: none;
        position: relative;
    }
    #btn{
        top: 0;
        left: 0;
        position: absolute;
        width: 175px;
        height: 100%;
        background: #D179FF;
        border-radius: 15px;
        transition: .5s;
    }
    .btn:hover {
        background-color: #9D53E3;
        border-radius: 15px;
    }
`;

export const StyledButton = styled.button`
    /* Styles for the button */
`;