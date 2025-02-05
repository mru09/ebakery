import React, { useContext } from "react";

import "./BakeryNav.css";
import CartButton from "./CartButton";
import Logo from "../logo.png";
import { AuthContext } from "../authHandle/AuthContext";

const BakeryNav = (props) => {
  const isloggedIn = useContext(AuthContext).isloggedIn;
  const showLoginForm = useContext(AuthContext).showLoginForm;
  const onLogging = useContext(AuthContext).onLogging;
  const onShowLoginForm = useContext(AuthContext).onShowLoginForm;

  const onLogin = () => {
    onShowLoginForm();
    //onLogging(true);
  };

  const onLogout = () => {
    onLogging(false);
  };

  return (
    <React.Fragment>
      <div className="bg"></div>
      <header className="header">
        <img src={Logo} alt="bakery logo"></img>

        {isloggedIn && (
            <React.Fragment>
              <CartButton onOrderResetCart={props.onOrderResetCart} />
              <button className="logButton" onClick={onLogout}>
                Logout
              </button>
            </React.Fragment>
        )}
        {(!isloggedIn && !showLoginForm) && (
          <button className="logButton" onClick={onLogin}>
            login
          </button>
        )}
      </header>
    </React.Fragment>
  );
};

export default BakeryNav;
