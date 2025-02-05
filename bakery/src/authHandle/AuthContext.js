import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  isloggedIn: false,
  showLoginForm: false,
  onLogging: () => {},
  onShowLoginForm: () => {},
  onHideLoginForm: () => {},
});

export const AuthProp =  (props) => {
  const [isLogged, setLogged] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const loggenIn = localStorage.getItem("isLogged");

    if (loggenIn === "1") setLogged(true);
  }, []);

  const onLogging = (flag) => {
    if (flag === true) localStorage.setItem("isLogged", 1);
    else localStorage.removeItem("isLogged");

    setLogged(flag);
  };

  const onShowLoginForm = () => {
    setShowLoginForm(true);
  };

  const onHideLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isloggedIn: isLogged,
        showLoginForm: showLoginForm,
        onLogging: onLogging,
        onShowLoginForm: onShowLoginForm,
        onHideLoginForm: onHideLoginForm
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
