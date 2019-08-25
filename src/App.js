import React from "react";

import FrontMatter from "./FrontMatter";
import Resume, { frontMatter } from "./Resume.md";
const App = () => {
  document.title = `${frontMatter.name} | Resume `;
  return (
    <React.Fragment>
      <FrontMatter {...frontMatter} />
      <Resume />
    </React.Fragment>
  );
};
export default App;
