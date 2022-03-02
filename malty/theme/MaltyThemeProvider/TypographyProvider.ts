import styled from 'styled-components';

const TypographyProvider = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');

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
  width: 100%;
`;

export { TypographyProvider };
