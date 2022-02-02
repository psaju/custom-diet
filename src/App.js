import './App.css';
import { useEffect, useState } from 'react';
import { appendScripts, getOrderData } from './Scripts/Helpers';
import Meallist from './Components/Meallist';
import MealButtons from './Components/MealButtons'

function App() {

  const [menu, setMenu] = useState([]);
  const [orderData, setOrderData] = useState(null);
  const [popupVisibility, setPopupVisibility] = useState(false)
  const [activeBasketPosition, setActiveBasketPosition] = useState(null)

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

  function togglePopup(basketPosition) {
    setPopupVisibility(!popupVisibility);
    setActiveBasketPosition(basketPosition);
  }

  return (
    <div className="App">
      <MealButtons key={'mealbuttons'} orderData={orderData} togglePopup={togglePopup} />
      {
        popupVisibility?
          <Meallist togglePopup={togglePopup} orderData={orderData.data.productsResults[activeBasketPosition]} activeBasketPosition={activeBasketPosition} menu={menu} />
        :
          null
      }
    </div>
  );
}

export default App;
