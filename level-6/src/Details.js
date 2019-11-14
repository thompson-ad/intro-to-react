import React from "react";

const Details = props => {
  // this pretty prints the props so you can see everything that is coming in from the router
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
