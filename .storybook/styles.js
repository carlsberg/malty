import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        box-sizing: border-box;

        &::before,
        &::after {
            box-sizing: border-box;
        }
    }
    body{
        font-family: ${({ theme }) => theme.font.fontFamily.text};
    }
    /* montserrat-300 - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('../fonts/montserrat-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/montserrat-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    font-display: fallback;
    }
    /* montserrat-regular - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    font-display: fallback;
    }
    /* montserrat-500 - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('../fonts/montserrat-v15-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/montserrat-v15-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    font-display: fallback;
    }
    /* montserrat-600 - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('../fonts/montserrat-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/montserrat-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    font-display: fallback;
    }
    /* montserrat-700 - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('../fonts/montserrat-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/montserrat-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    font-display: fallback;
    }
    /* montserrat-700italic - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    src: local(''),
        url('../fonts/montserrat-v15-latin-700italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/montserrat-v15-latin-700italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    font-display: fallback;
    }
`;
