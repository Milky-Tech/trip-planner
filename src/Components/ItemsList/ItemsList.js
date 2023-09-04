import React, { useState } from "react";
import PackingList from "./PackingList";
import Item from "./Item";
import Form from "./Form";

const ItemsList = ({ selectedPlace, initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const numItem = items.length;
  const ItP = items.filter((itm) => itm.packed).length;
  const numItemP = (ItP / numItem) * 100;
  function DelItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function upItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }
  const [sortItem, setSortItem] = useState("input");
  let sortedItems;

  if (sortItem === "input") sortedItems = items;
  if (sortItem === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortItem === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  const ClearItem = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete all items on the list?"
    );
    if (confirm) setItems([]);
  };
  return (
    <div>
      {selectedPlace ? (
        <>
          <p>Your choice location is {selectedPlace}</p>
          <h4>
            These are the things your need for your trip, you can add more below
          </h4>
          <Form setItems={setItems} items={items} />
          <PackingList
            sortItem={sortItem}
            setSortItem={setSortItem}
            itm={sortedItems.map((item) => (
              <Item item={item} key={item.id} del={DelItem} upItem={upItem} />
            ))}
            clrList={ClearItem}
          />
          <Stats numItem={numItem} numItemP={numItemP} ItP={ItP} />
        </>
      ) : (
        "Choose a location above"
      )}
    </div>
  );
};

const Stats = ({ numItem, total, numItemP, ItP }) => {
  if (!numItem)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {numItemP === 100
          ? "You've got everything ready to go!!!✈"
          : `You have ${numItem} items on your list, and you already packed ${ItP}(${Math.round(
              numItemP
            )}%)`}
      </em>
    </footer>
  );
};
export default ItemsList;
