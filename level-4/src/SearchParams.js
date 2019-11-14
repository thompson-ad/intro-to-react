import React from "react";

// this new component is like a search box so that we can search for little facets of pets 

const SearchParams = () => {
  const location = "Seattle, WA";

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
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
