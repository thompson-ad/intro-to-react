// We are going to rewrite the component from level 2 using JSX
// JSX doesn't do much it just makes code a little more readable
// if I write React.createElement("h1", { id: "main-title" }, "My Website");
// I am trying to write <h1 id="main-title">My Website</h1>
// JSX tries to shorcut this translation layer so you can just write what you mean
// JSX is just translating those tags into React.createElement calls
// because of this everywhere you have jsx you need to import react

import React from "react";

// export default function Pet({ name, animal, breed }) {
//   return (
//     <div>
// if you remove the curly braces here it will give you 'name' on the screen
// the curly braces mean that you are letting jsx know that it is a javascript expression so you could do like name.toUppercase() in the curly braces
//       <h1>{name}</h1>
//       <h2>{animal}</h2>
//       <h2>{breed}</h2>
//     </div>
//   );
// }

const Pet = props => {
  // note that you have to return just one thing as you would in a normal function
  // so in this case you could not put an <h1></h1> above the div as that would be like returning 2 web components
  return (
    <div className="">
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
