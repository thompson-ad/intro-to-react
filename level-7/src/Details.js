import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// a JS class that extends React.component - i.e. it gets some stuff from React.component
// The one hard requirement of every class component is that it must have a render method
// you also cannot use Hooks with classes
class Details extends React.Component {
  // NOT EVERY COMPONENT NEEDS TO HAVE A CONSTRUCTOR. Many don't.
  // in this case the constructor function is needed to instatiate the state object which we use instead of useState
  // if you have a constructor you have to use suoer(props)
  // with classes, instead of getting props via parameters and state via useState, we are getting it from the instance variables
  // this.props and this.state

  // constructor(props) {
  //   // super says to call the constructor on the parent class React.component
  //   super(props);
  //   // this is instatiating the component state within the class
  //   // any change to the state following this is controlled via setState
  //   // after this.setState is run this will update
  //   // set state will also add the other states here that aren't initially instatiated
  //   this.state = { loading: true };
  // }

  // THERE IS A BETTER WAY OF INSTATIATING YOUR STATE BUT IS QUITE NEW
  // https://btholt.github.io/complete-intro-to-react-v5/class-components
  state = {
    loading: true
  };

  // componentDidMount is very similar to useEffect
  componentDidMount() {
    throw new Error("lol");
    // rather than getting the id from the argument as we were with functions it comes under this.props
    // anything that is being passed from the parent is coming in via this.props
    // one thing to keep in mind with this.props is that it is immutable - the child can only read this.props and not chage it
    pet.animal(this.props.id).then(({
      animal
    }) => {
      // something to be aware of here is that you cannot use funcion key word you have to use an arrow functions
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h3 > Loading... < /h3>;
    }

    // this is coming fromt the API
    const {
      animal,
      breed,
      location,
      description,
      name,
      media
    } = this.state;

    return ( <
      div className = "details" >
      <
      Carousel media = {
        media
      }
      /> <
      div >
      <
      h1 > {
        name
      } < /h1> <
      h2 > {
        `${animal} - ${breed} - ${location}`
      } < /h2> <
      button > Adopt {
        name
      } < /button> <
      p > {
        description
      } < /p> < /
      div > <
      /div>
    );
  }
}

export default DetailsWithErrorBoundary(props) {
  <ErrorBoundary>
    {/* ...props is going to spread the props accros the details component */}
    {/* equivalent of daying id={props.id1}  and writing all the props out*/}
    <Details {...props}/>
  </ErrorBoundary>
};