import { useState, useEffect } from "react";
import { getStringObject } from '../Scripts/Helpers'
import MealCalendar from "./MealCalendar";

function Meallist(props) {

  const [dates, setDates] = useState([]);
  const [replacements, setreplacements] = useState([]);
  const [activeDate, setActiveDate] = useState();
  const [activeReplacements, setActiveReplacements] = useState([]);

  useEffect(() => {
    prepareData()
  }, [])


  function prepareData() {
    const stringObj = getStringObject(props.orderData.remarksToProduct)
    setDates(stringObj[0]);
    setreplacements(stringObj[1]);
  }

  return (
    <>
    <MealCalendar dates={dates} activeDate={activeDate} setActiveDate={setActiveDate} setActiveReplacements={setActiveReplacements} replacements={replacements} activeReplacements={activeReplacements}/>
    <div id="meal-list">
      {activeReplacements.map((item, i) => {
        return (
          <div className="meal" key={i}>
            <div className="meal-label">
              <span className="meal-label-name">ŚNIADANIE</span>
              <span className="meal-label-diet">ZDROWE ODCHUDZANIE</span>

              <span className="meal-label-buttons">
                <a className="meal-replace" title="Edytuj" data-mealid="1"></a>
              </span>

            </div>
            <div className="meal-content">
              <div className="meal-content-info">
                <div className="meal-content-name">Brzoskwiniowa owsianka z sokiem jabłkowym</div>
              </div>

              <div className="meal-content-nutrients">
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Białko</span><span>4 g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Węglowodany</span><span>46 g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Tłuszcze</span><span>2 g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Kaloryczność</span><span>226 kcal</span>
                </div>
              </div>


              <div className="meal-content-alergens">
                <span className="green">Alergeny</span>

              </div>

            </div>
            <div className="meal-disabled">
              <i className="icon-meal"></i>
              <a className="meal-restore btn-large" data-mealid="1">Przywróć</a>
              <span className="meal-disabled-info">Posiłek ŚNIADANIE usunięty</span>
            </div>
          </div>
        )}
      )}
    </div>
    </>
  );
}

export default Meallist;