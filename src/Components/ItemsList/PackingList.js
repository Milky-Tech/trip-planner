import React from "react";

const PackingList = ({ itm, sortItem, setSortItem, clrList }) => {
  return (
    <div className="list">
      <ul>{itm}</ul>
      <div className="actions">
        <select value={sortItem} onChange={(e) => setSortItem(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clrList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
