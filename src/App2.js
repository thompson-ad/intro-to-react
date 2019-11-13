
// const Pet = props => {
//     return React.createElement("div", {}, [
//         // Pet uses the props tp make content
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed)
//     ]);
// };

// destructured props from above
const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};
  
const App = () => {
return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    // createElement passes the attributes as props to pets
    React.createElement(Pet, {
    name: "Luna",
    animal: "Dog",
    breed: "Havanese"
    }),
    React.createElement(Pet, {
    name: "Pepper",
    animal: "Bird",
    breed: "Cockatiel"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
]);
};
  
ReactDOM.render(React.createElement(App), document.getElementById("root"));