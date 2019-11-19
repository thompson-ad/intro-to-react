import React, { useState } from "react";

// this is going to be our custom hook

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  // removes any spaces and makes it lowercase
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  //   we use hooks internally to keep the state and then we return the component and the state to the user via an array which can destructure layer

  return [state, Dropdown, setState];
};

export default useDropdown;
