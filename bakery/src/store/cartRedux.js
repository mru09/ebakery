import { createStore } from "redux";

const storeReducer = (state = { items: [] }, action) => {
  if (action.type === "increment") {
    const itemCurrIndex = state.items.findIndex(
      (food) => food.label === action.payload.label
    );
    if (itemCurrIndex !== -1) {
      let tempArr = [...state.items];
      tempArr[itemCurrIndex] = {
        ...tempArr[itemCurrIndex],
        unit: tempArr[itemCurrIndex].unit + 1,
      };

      return { items: tempArr };
    }
    return { items: [...state.items, action.payload] };
  }

  if (action.type === "decrement") {
    const itemCurrIndex = state.items.findIndex(
      (food) => food.label === action.payload
    );
    let tempArr = [...state.items];
    if (tempArr[itemCurrIndex].unit > 1) {
      tempArr[itemCurrIndex] = {
        ...tempArr[itemCurrIndex],
        unit: tempArr[itemCurrIndex].unit - 1,
      };
    } else {
      tempArr.splice(itemCurrIndex, 1);
    }
    return { items: tempArr };
  }

  if (action.type === "onOrder") {
    return { items: [] };
  }

  return state;
};

const store = createStore(storeReducer);

export default store;
