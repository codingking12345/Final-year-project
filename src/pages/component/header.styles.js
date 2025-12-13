import styled from "styled-components";

export const StyledHeader = styled.div`
/*Styles for header*/
@import url("https://candyfonts.com/wp-data/2018/10/26/11538/HELR45W.ttf");
*{
    font-family: 'helvetica';
}

  .header {
    display:flex;  
    justify-content: space-between;
    max-width: 100%;
    margin: 0 auto;
    height: 72px;
    background-color: #D179FF;

  }

 .header_logo{
    margin-left: 30px;
    margin-top: 8px;
}


  .header_logo li {
    display: flex;
    position: relative;
    overflow-x: scroll;
    font-weight: bolder;
    font-size: 35px;
    margin-left: 110px;
    margin-top: -50px;

  }

  .product {
    display:flex;
    gap: 30px;
    font-size: 16px;
    margin-right: 400px;
    margin-top: 22px; 
  }

  .logo {
    display:flex;
    gap: 30px;
    font-size: 16px;
    margin-right: 50px;
    margin-top: 22px;
  }
`;