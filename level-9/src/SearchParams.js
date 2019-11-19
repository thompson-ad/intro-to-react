import React, { useState, useEffect, useContext } from "react";
// useEffect will help us with calling to the API
// the API is from Petfinder.com and is US based
// we install cross enc so that we get mock data from the API
// when you run npm run dev now you will get mock data
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  // an async function is a function that is guranteed to return a promise
  // await key word forces the function to wait until the pet.animals is complete
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    // if you request something and nothinf comes back then set as empty array
    setPets(animals || []);
  }

  // useEffect is going to replace several of the lifecycle hooks
  // componentDidMount etc

  // useEffect is disconnected from rendering and it is scheduling the function to run after render
  // so the code below runs first
  // effects do AJAX calls, modify ambient state, integrate with other libraries and many other things
  // Basically it's a way to delay work until after render happens and to deal with asynchronous side effects
  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error);
    // if there is stuff there then clear it out
    setBreeds([]);
    setBreed("");

    // .breed is a function that is returned from the API and you pass is the animal from the dropdown
    // that retuens back an object with breed in it
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      // we have a list of objects that we want to transform into a list of strings and we do this is .map
      const breedStrings = apiBreeds.map(({ name }) => name); //.map((breedObj) => breedObj.name)
      setBreeds(breedStrings);
    }, console.error); //error => console.error(error)
  }, [animal, setBreed, setBreeds]); // if any one of these things change then do the AJAX call post render if not then don't
  // if you want it to only run once the pass an empty array

  return (
    //   you can't use class because class is a reserved word in JS so you have to use className
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault(); //don't want to actually submit an HTML form
          requestPets();
        }}
      >
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
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="orangered">Orange Red</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
