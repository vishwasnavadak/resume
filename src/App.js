import React from "react";

import FrontMatter from "./FrontMatter";
import Resume, { frontMatter } from "./Resume.md";
const App = () => {
  document.title = `${frontMatter.name} | Resume `;
  return (
    <div>
      <FrontMatter {...frontMatter} />
      <Resume />
    </div>
  );
};
export default App;
