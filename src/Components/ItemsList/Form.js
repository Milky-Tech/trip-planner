import React, { useState } from "react";

const Form = ({ setItems, items }) => {
  const [description, setDes] = useState("");
  const [quantity, setQuantity] = useState(1);

  function addItems(item) {
    return setItems([...items, item]);
  }

  function submt(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    addItems(newItem);
    setDes("");
    setQuantity(1);
  }
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDes(e.target.value)}
      />
      <button onClick={submt}>ADD</button>
    </form>
  );
};

export default Form;
