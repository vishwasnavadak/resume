import React, { lazy, Component, Suspense } from "react";
const Resume = lazy(() => import("!babel-loader!mdx-loader!./Resume.md"));

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Resume />
        </Suspense>
      </div>
    );
  }
}
export default App;
