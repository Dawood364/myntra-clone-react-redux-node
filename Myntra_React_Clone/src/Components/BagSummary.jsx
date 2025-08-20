import React from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const Totalitems = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.Bag);
  const CONVENIENCE_FEES = 99;
  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  const items = Totalitems.filter((item) => bagItems.includes(item.id));
  items.forEach((BagItem) => {
    totalMRP += BagItem.original_price;
    totalDiscount += BagItem.original_price - BagItem.current_price;
  });

  const FinalPrice = totalMRP - totalDiscount + CONVENIENCE_FEES;

  console.log("Summaer", items);
  return (
    <div>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">{CONVENIENCE_FEES}</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{FinalPrice}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </div>
  );
};

export default BagSummary;
