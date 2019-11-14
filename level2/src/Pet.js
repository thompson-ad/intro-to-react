import React from "react";

// this component was separated from App.js by highlighting the component and clicking th lightbulb -> 'move to new file'

export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
}
