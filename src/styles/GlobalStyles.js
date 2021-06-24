import { createGlobalStyle } from 'styled-components';

// CSS variable or custom property
// :root allows this to be available anywhere in the app
const GlobalStyles = createGlobalStyle`

/* makes styling our widths much easier */
* {
  box-sizing: border-box;
}

/* remove all margin and padding so we can butt content up to the upper left corner of the screen */
body {
  margin: 0;
  padding: 0;
  background-color: orange;
}


`;

export default GlobalStyles;
