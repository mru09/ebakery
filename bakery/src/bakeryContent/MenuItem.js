import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./MenuItem.css";

const MenuItem = (props) => {
  const dispatch = useDispatch();

  const [unit, setUnit] = useState(props.unit);

  // const onAddItem = () => {

  //     const item = {
  //                     id:Math.random().toString(),
  //                     label: props.label,
  //                     unit: +unit,
  //                     cost: +props.cost
  //                 };

  //     props.addItemToCart(item);
  // };

  const onAddItem = () => {
    const item = {
      id: Math.random().toString(),
      label: props.label,
      unit: +unit,
      cost: +props.cost,
    };
    dispatch({ type: "increment", payload: item });
  };

  const onRemoveItem = () => {
    dispatch({ type: "decrement", payload: props.label });
  };

  const onUnitChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <li className="foodItem">
      <div className="leftContainer">
        <p className="label">{props.label}</p>
        <p className="desc">{props.desc}</p>
      </div>
      <div className="rightContainer">
        <p className="cost">Rs. {props.cost}</p>
        <div className="inputContainer">
          {props.listName === "Cart" && 
          <React.Fragment>
          <button className="addItemButton" onClick={onRemoveItem}>-</button>
          <p>{props.unit}</p>
          <button className="addItemButton" onClick={onAddItem}>+</button>
          </React.Fragment>
          }
          {props.listName !== "Cart" && (
            <input
              value={unit}
              name="quantity"
              type="Number"
              min="1"
              onChange={onUnitChange}
            ></input>
          )}
          {props.listName !== "Cart" && (
            <button className="addButtom" onClick={onAddItem}>
              + Add
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
