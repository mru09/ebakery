import React,{ useContext } from 'react';

import BakeryNav from './layout/BakeryNav';
import BakeryBody from './bakeryContent/BakeryBody'
import { AuthContext } from './authHandle/AuthContext'
import Login from './login/Login'
import './App.css';

function App() {

  //const [cartList, setCartList] = useState([]);

  // const addItemToCart = (item) => {
  //   setCartList(prevList =>  {

  //     const itemCurrIndex = prevList.findIndex(food => food.label === item.label);
  //     if(itemCurrIndex !== -1)
  //     {
  //       prevList[itemCurrIndex] = { ...prevList[itemCurrIndex], unit:prevList[itemCurrIndex].unit + 1};
  //       return prevList;
  //     }
  //     return [...prevList, item];
  //   })
  //   console.log(cartList);
  // };

  const showLoginForm = useContext(AuthContext).showLoginForm;

  return (
    <React.Fragment>
      <BakeryNav />
      <div className="content">  
        {!showLoginForm && <BakeryBody />}
        {showLoginForm && <Login />}
      </div>
    </React.Fragment>
  );
}

export default App;
