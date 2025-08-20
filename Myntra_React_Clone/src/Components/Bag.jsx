import React from "react";
import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const Totalitems = useSelector((store) => store.items);
  const bag = useSelector((store) => store.Bag);
  // console.log("item,bag", items, bag);

  const items = Totalitems.filter((item) => bag.includes(item.id));

  return (
    <div>
      <main>
        <div className="con">
          <div className="bag-items-container">
            {items.map((items) => (
              <BagItem item={items} />
            ))}
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bag;
