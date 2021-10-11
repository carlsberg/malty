import styled from 'styled-components';

const TypographyProvider = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  @font-face {
    font-family: 'Montserrat';
    font-display: swap;
  }

  font-family: 'Montserrat', sans-serif;

  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  line-height: 1;
`;

export { TypographyProvider };
