import { createGlobalStyle } from "styled-components";

const customMediaQuery = (minWidth) => `@media (min-width: ${minWidth}px)`;

export const media = {
  tablet: customMediaQuery(800),
};

export const GlobalStyles = createGlobalStyle`
:root {
  --color-cyan:hsl(178, 100%, 50%);
  --color-para:hsl(215, 51%, 70%);
  --color-bg:hsl(217, 54%, 11%);
  --color-bg-card: hsl(216, 50%, 16%);
  --color-line: hsl(215, 32%, 27%);

  --font-size-body: 18px;
 
  

 
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: var(--font-size-body);
  background-color:var(--color-bg);
  font-family: 'Outfit', monospace;
  min-height: 100vh;
  color:var(--color-para);
  overflow: hidden;
 
}
a {
  
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}


main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2.4rem;
}


section {
  max-width: 73rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${media.tablet} {
    max-width: 57.3rem;
  }
}
`;
