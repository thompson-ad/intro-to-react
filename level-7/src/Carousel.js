import React from "react";

class Carousel extends React.Component {
  // needs to show an array of images and the state is the active one
  state = {
    photos: [],
    active: 0
  };

  //getDerivedStateFromProps allows you to accept data from a parent and get state that is derived from it
  //In this case, we're removing the superfluous photos and just keeping the ones we want
  //   getDerivedStateFromProps gets some properties does some filtering on them and passes it on to the component
  //   so the component will nevber see the media props
  //   this is a good idea if you have some form of derived state - if you want to abstract to state into some sort of handler

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      // the photos objects will have small medium large and full and we just want to large ones
      photos = media.map(({ large }) => large);
    }
    // return the object that we want to be merged into the state
    return { photos };
  }

  //   this is how NOT TO handle index click
  //   note - dateset is a DOM API not react - it allows you to set whats on the data- attr
  //   the plus at the start coerses a string into a number
  //    The .this is undefined here - we need it to be the carousel component
  //   there are a couple of ways to fix this
  // 1. if you don't have public class properties enabled in your project, in the constructor we can put

  //   constructor(props) {
  //     super(props);

  //     // This looks ridiculous but what it is doing is binding the context of handle click to the carousel
  //     // this mean handle index can be called an this will always be correct
  //     this.handleIndexClick = this.handleIndexClick.bind(this);
  //   }

  // 2. if you have public class properties, you can turn handleClick into an arrow functions

  //   handleIndexClick(event) {
  //     this.setState({
  //       active: +event.target.dataset.index
  //     });
  //   }

  //   arrow functions don't create a new context when they are invoked. they get .this lexically

  // RULE OF THUMB
  // WHENEVER YOU ARE PASSING FUNCTIONS DOWN INTO CHILDREN OR EVENT LISTENERS
  // USE AN ARROW FUNCTION
  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
