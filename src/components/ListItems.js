import React from "react";
import "./ListItems.css";
import { FaTrash } from "react-icons/fa";
import FlipMove from "react-flip-move";

function ListItems(props) {
  const listItems = props.items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <FaTrash
            className="faIcon"
            onClick={() => props.deleteItem(item.key)}
          />
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={250} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
