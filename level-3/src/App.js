import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div className="">
      <h1>My App</h1>
      {/* notice we now have pet as a component. Also notice that it MUST be capitalised otherwise it will try to render it as a web component and not a react one */}
      {/* We now pass the props down as we add attributes */}
      {/* in JSX the self closing tags are requirted */}
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
