import React, { useState, useContext } from "react";

import MenuList from "./MenuList";
import "./BakeryBody.css";
import { AuthContext } from "../authHandle/AuthContext";

const BakeryBody = (props) => {
  // const foodList = [{
  //     id:'f1',
  //     label: "choc pastry",
  //     desc: "cake n chocolate",
  //     cost:250,
  //     unit: '1'
  //   },
  //   {
  //     id:'f2',
  //     label: "butter pastry",
  //     desc: "cake n butter",
  //     cost:220,
  //     unit: '1'
  //   },
  //   {
  //     id:'f3',
  //     label: "pine pastry",
  //     desc: "cake n pine",
  //     cost:280,
  //     unit: '1'
  //   },
  //   {
  //     id:'f4',
  //     label: "red velvet pastry",
  //     desc: "cake n butter",
  //     cost:320,
  //     unit: '1'
  //   },
  //   {
  //     id:'f5',
  //     label: "blueberry pastry",
  //     desc: "cake n butter",
  //     cost: 180,
  //     unit: '1'
  //   },
  //   {
  //     id:'f6',
  //     label: "NY cheese cake pastry",
  //     desc: "cake n butter",
  //     cost: 380,
  //     unit: '1'
  //   }];

  const isloggedIn = useContext(AuthContext).isloggedIn;

  const listName = ["pastries", "cakes", "shakes"];

  const [currList, setCurrList] = useState("");

  const onShowListChange = (listname) => {
    setCurrList(listname);
  };

  return (
    <React.Fragment>
      <div className="pitchContainer">
        <h2>We'll make your sweet dreams come true</h2>
        <p>
          Craving for some sweetness or searching for a perfect tea time snack?
        </p>
        <p>
          Scones are little individual quick breads similar to American
          biscuits. They are usually round but can be made in other shapes such
          as triangles or squares. They require about fifteen minutes to bake
          and should be served while still warm from the oven. Scones should be
          crispy on the top and bottom and soft and flaky in the middle.
          Traditionally they are served with butter at room temperature, lemon
          curd, marmalade or jam and Devonshire clotted cream. The recipe for
          Lemon Curd appears in our British Afternoon Tea menu, but we also
          provide it here for your convenience. The host should plan to serve
          one or two scones per guest.
        </p>
        <p>
          try out our rich pastries, yummy thick-shakes, flaky croissants,
          perfectly baked breads and much more...{" "}
        </p>
        <p>or When in doubt, just order a cake!!!</p>
      </div>
      {isloggedIn &&
        listName.map((foodType) => (
          <MenuList
            listName={foodType}
            key={foodType}
            // foodList={foodList}
            showList={currList}
            onShowListChange={onShowListChange}
          />
        ))}
    </React.Fragment>
  );
};

export default BakeryBody;
