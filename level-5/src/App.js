import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div className="">
      <h1>My App</h1>
      {/* if you try and type in the input form it will not work */}
      {/* each time you hit a key stroke react will initiate a re-render cycle where it captures the event and kicks of a re-render cycle for the component */}
      {/* it re-renders App, gets to Search Params, re-renders that and the value of location is stille Seattle */}
      {/* to take care of this we use useState */}
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
