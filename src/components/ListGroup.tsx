import { Fragment, useState } from "react";

function ListGroup() {
  const items = ["Mumbai", "Delhi", "Bangluru", "Goa"];

  //   Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  // state Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
