import { Fragment } from "react";

function ListGroup() {
  let items = ["Mumbai", "Delhi", "Bangluru", "Goa"];
  4;
  items = [];

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
    </Fragment>
  );
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
