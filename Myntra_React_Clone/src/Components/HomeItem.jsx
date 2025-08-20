import React from "react";
import { useDispatch } from "react-redux";
import { BagActions } from "./Store/BagSlice";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsBag } from "react-icons/bs";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.Bag);
  const elementfound = bagitems.includes(item.id);
  {
    /*-1 return karta agr item na ho ab hum yaha kah raha grtaer 0 is ka matalb ha item ha cart ma to codiyon elementfound ? remove dikhao button nai tu addwala dikah do */
  }

  const HandleOnClickButton = () => {
    dispatch(BagActions.AddToBag(item.id));
  };

  const HandleOnClickDeleteButton = () => {
    dispatch(BagActions.RemoveFromBag(item.id));
  };
  return (
    <div>
      <div class="item-container">
        <img class="item-image" src={item.image} alt="item image" />
        <div class="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementfound ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={HandleOnClickDeleteButton}
          >
            <RiDeleteBin6Line /> Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success"
            onClick={HandleOnClickButton}
          >
            <BsBag /> Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeItem;
