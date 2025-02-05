import React, { useState } from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import "./CartModal.css";
import MenuList from "../bakeryContent/MenuList";
import OrderPlaced from "./OrderPlaced"
import Spinloader from "./Spinloader"

const CartBg = (props) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [loader, setShowLoader] = useState(false);
  const [orderPlaced, setShowOrderPlaced] = useState(false);

  const totalCost = items.reduce((result, item) => {
    return result + item.unit * item.cost;
  }, 0);

  const onOrderResetCart = async () => {
    setShowLoader(true);
    const response = await fetch(
      "https://bakeryapp-138f0-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify(items),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("could not add expense");
    }
    dispatch({ type: "onOrder" });
    setShowLoader(false);
    setShowOrderPlaced(true);
  };

  return (
    <div className="cartModal">
      {loader && <Spinloader />}

      <div className="cart">
        {!loader && items.length > 0 && (
          <MenuList
            listName="Cart"
            key="Cart"
            foodList={items}
            showList="Cart"
          />
        )}

        {orderPlaced && <OrderPlaced />}

        {!loader && <footer>
          <div className="ordertotal">
            {items.length === 0 && <p>Cart is empty!!</p>}
            {items.length > 0 && <p>Total cost : Rs. {totalCost}</p>}
          </div>
          {items.length > 0 && (
            <button onClick={onOrderResetCart}>Order</button>
          )}
          <button onClick={props.onCartClick}>Close</button>
        </footer>}
      </div>
    </div>
  );
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <CartBg onCartClick={props.onCartClick} />,
        document.getElementById("cart-modal")
      )}
    </React.Fragment>
  );
};

export default CartModal;
