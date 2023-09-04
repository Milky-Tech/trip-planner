import React from "react";

const Item = ({ item, del, upItem }) => {
  return (
    <li className="list">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => upItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
        <button onClick={() => del(item.id)}>❌</button>
      </span>
    </li>
  );
};

export default Item;
