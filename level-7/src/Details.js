import React from "react";
import pet from "@frontendmasters/pet";

// a JS class that extends React.component - i.e. it gets some stuff from React.component
// The one hard requirement of every class component is that it must have a render method
// you also cannot use Hooks with classes
class Details extends React.component {

  constructor(props) {
    // super says to call the constructor on the parent class React.component
    super(props);
    // this is instatiating the component state within the class
    // any change to the state following this is controlled via setState
    // after this.setState is run this will update
    // set state will also add the other states here that aren't initially instatiated
    this.state = { loading: true };
  }
  // componentDidMount is very similar to useEffect
  componentDidMount() {
    // rather than getting the id from the argument as we were with functions it comes under this.props
    // anything that is being passed from the parent is coming in via this.props
    // one thing to keep in mind with this.props is that it is immutable - the child can only read this.props and not chage it
    pet.animal(this.props.id).then({ animal } => {
      // something to be aware of here is that you cannot use funcion key word you have to use an arrow functions
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${
          animal.contact.address.state
        }`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    });
  }
  render() {}
}

export default Details;
