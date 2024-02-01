import { Fragment } from "react";

function ListGroup() {
  const items = ["Mumbai", "Delhi", "Bangluru", "Goa"];

  //   Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
