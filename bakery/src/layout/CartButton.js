import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./CartButton.css";
import CartModal from "../modals/CartModal";

const CartButton = (props) => {
  const [showCart, setshowCart] = useState(false);
  const items = useSelector((state) => state.items);

  const orders = items.reduce((result, item) => {
    return result + item.unit;
  }, 0);

  const onCartClick = (flag) => {
    setshowCart(flag);
  };

  return (
    <React.Fragment>
      {showCart && <CartModal onCartClick={onCartClick.bind(null, false)} />}
      <button className="cartButton" onClick={onCartClick.bind(null, true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10.028 15h-5.413l-4.615-11h15l-.564 2h-11.428l2.938 7h2.678l1.404 2zm7.544-5.439l1.756-5.561h1.929l.743-2h-4.195l-2.489 7.979 2.256-.418zm-10.072 6.439c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm14.011-3.454c1.44 2.018 1.041 3.439 2.489 5.471l-5.585 3.983c-3.015-2.246-5.617-2.966-6.458-3.248-.801-.27-1.317-.783-1.14-1.428.181-.652.862-.846 1.424-.821.848.039 1.536.293 1.536.293l-3.896-5.461c-.348-.488-.234-1.165.254-1.512.486-.348 1.163-.234 1.511.253l2.639 3.693c.127.178.374.22.553.093.179-.127.22-.375.093-.553l-.65-.912 1.047-.261c.274-.067.562.04.726.27l.532.746c.127.179.374.22.553.093.179-.127.22-.375.093-.554l-.614-.861 1.027-.23c.27-.058.548.05.708.274l.452.634c.127.178.375.219.553.093.179-.127.22-.375.093-.553l-.507-.71.303-.054c1.052-.186 1.623.363 2.264 1.262zm-12.006-3.597c.676-.482 1.55-.498 2.201.002-.371-1.242-1.856-1.754-2.913-1-1.059.756-1.054 2.326-.003 3.079-.261-.778.039-1.599.715-2.081z" />
        </svg>
        Cart
        <div>{orders}</div>
      </button>
    </React.Fragment>
  );
};

export default CartButton;
