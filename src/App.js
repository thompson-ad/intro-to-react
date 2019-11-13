const Pet = () => {
    // to make the div have multiple child element we pass it an array of content in the third argument
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havanese")
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "My App"),
        // use the pet component multiple times
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
    ])
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));