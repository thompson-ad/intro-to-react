import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  state = {
    loading: true
  };

  // componentDidMount is very similar to useEffect
  componentDidMount() {
    // rather than getting the id from the argument as we were with functions it comes under this.props
    // anything that is being passed from the parent is coming in via this.props
    // one thing to keep in mind with this.props is that it is immutable - the child can only read this.props and not chage it
    pet.animal(this.props.id).then(({ animal }) => {
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
      return <h3> Loading... </h3>;
    }

    // this is coming fromt the API
    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1> {name} </h1> <h2> {`${animal} - ${breed} - ${location}`} </h2>{" "}
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p> {description} </p>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
