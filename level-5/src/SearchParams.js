import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

// this new component is like a search box so that we can search for little facets of pets
// we will render this out to App.js
// const SearchParams = () => {
//   const location = "Seattle, WA";

//   return (
//     //   you can't use class because class is a reserved word in JS so you have to use className
//     <div className="search-params">
//       <form action="">
//         <label htmlFor="location">
//           location
//           <input
//             type="text"
//             id="location"
//             value={location}
//             placeholder="location"
//           />
//         </label>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SearchParams;

const SearchParams = () => {
  // location is the current state of location
  // setLocation is an updater for that
  // "Seattle, WA" is the default
  // THIS IS A HOOK
  //   useState is creating a Hook and when you get back a hook you get an array of 2 things
  // 1. the current state of it
  // 2. an updater function for that current piece of state
  // All hooks begin with 'use'
  //   so the below array is destructured from what useState always gives back
  //   Hooks update the need to setState in functional components
  //   you can think of hooks as something that gets 'hooked' or 'caught' every time the render function gets called
  // DO NOT PUT HOOKS IN LOOPS OR IF STATEMENTS - they rely strongly on the order in which they are called
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, updateBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);

  return (
    //   you can't use class because class is a reserved word in JS so you have to use className
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            // whenever there is a change in the input setLocation will be called with whatever is inside the input
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => updateAnimal(e.target.value)}
            onBlur={e => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={e => updateBreed(e.target.value)}
            onBlur={e => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
