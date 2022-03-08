import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import { appendScripts, getOrderData } from './Scripts/Helpers';
import Meallist from './Components/Meallist';
import MealButtons from './Components/MealButtons'


export const AppContext = React.createContext();

function App() {

  

  const [menu, setMenu] = useState([]);
  const [orderData, setOrderData] = useState(null);
  const [popupVisibility, setPopupVisibility] = useState(false)
  const [activeBasketPosition, setActiveBasketPosition] = useState(null)
  const [activeSystemId, setActiveSystemId] = useState(null)
  const [activeCalorieCode, setActiveCalorieCode] = useState(null)

  useEffect(() => {

    window.getMenu = function (json) {
      const obj = {};
      obj[json.id] = json;

      setMenu(menu => [...menu, obj]);
    }

    appendScripts();

    setOrderData(getOrderData({
      'orderSerialNumber': '33121',
      'orderId': 'iaisystem-103',
      'clientLogin': 'iaisystem',
      'orderAddDate': '2022-01-26 10:32:28'
    }))

  }, []);

  function togglePopup(basketPosition, systemId, calorieCode) {
    setPopupVisibility(!popupVisibility);
    setActiveBasketPosition(basketPosition);
    setActiveSystemId(systemId);
    setActiveCalorieCode(calorieCode);
  }

  return (
      <div className="App">
        <MealButtons key={'mealbuttons'} orderData={orderData} togglePopup={togglePopup} />
        {
          popupVisibility?
            <Meallist togglePopup={togglePopup} orderData={orderData.data.productsResults[activeBasketPosition]} activeBasketPosition={activeBasketPosition} menu={menu} activeSystemId={activeSystemId} activeCalorieCode={activeCalorieCode}/>
          :
            null
        }
      </div>
  );

  
}

export default App;
