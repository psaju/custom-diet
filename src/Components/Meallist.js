import { useState, useEffect } from "react";
import { getStringObject, getSingleMeal, getSingleAllergens } from '../Scripts/Helpers'
import MealCalendar from "./MealCalendar";

function Meallist(props) {

  const [dates, setDates] = useState([]);
  const [replacements, setreplacements] = useState([]);
  const [activeDate, setActiveDate] = useState();
  const [activeReplacements, setActiveReplacements] = useState([]);
  const [showReplacements, setShowReplacements] = useState(false);
  const [activeMeal, setActiveMeal] = useState({});

  useEffect(() => {
    prepareData()
  }, [])


  function prepareData() {
    const stringObj = getStringObject(props.orderData.remarksToProduct)
    setDates(stringObj[0]);
    setreplacements(stringObj[1]);
  }

  function toggleReplacements(mealObj) {
    setShowReplacements(true);
    setActiveMeal(mealObj)
  }

  return (
    <>
    <MealCalendar dates={dates} activeDate={activeDate} setActiveDate={setActiveDate} setActiveReplacements={setActiveReplacements} replacements={replacements} activeReplacements={activeReplacements}/>
    <div id="meal-list">
      {activeReplacements.map((item, i) => {
        const mealObj = getSingleMeal(props.menu, item);
        const allergensArray = getSingleAllergens(mealObj)

        return (
          typeof mealObj === 'undefined' ? '' :
          <div className="meal" key={i}>
            <div className="meal-label">
              <span className="meal-label-name">{mealObj.meal.attributes.name}</span>
              <span className="meal-label-diet">ZDROWE ODCHUDZANIE</span>

              <span className="meal-label-buttons">
                <a className="meal-replace" title="Edytuj" data-mealid="1" onClick={() => toggleReplacements(mealObj)}></a>
              </span>

            </div>
            <div className="meal-content">
              <div className="meal-content-info">
                <div className="meal-content-name">{mealObj.composition.name.pol}</div>
              </div>

              <div className="meal-content-nutrients">
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Białko</span><span>{Math.round(mealObj.composition.summary.proteins)}g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Węglowodany</span><span>{Math.round(mealObj.composition.summary.carbohydrates)}g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Tłuszcze</span><span>{Math.round(mealObj.composition.summary.fats)}g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Kaloryczność</span><span>{Math.round(mealObj.composition.summary.calories)} kcal</span>
                </div>
              </div>

              {allergensArray.length ? 
                <div className="meal-content-alergens">
                  <span className="green">Alergeny</span>
                  {allergensArray.join(", ")}
                </div> : ''
              }

            </div>
            <div className="meal-disabled">
              <i className="icon-meal"></i>
              <a className="meal-restore btn-large" data-mealid="1">Przywróć</a>
              <span className="meal-disabled-info">Posiłek {mealObj.meal.attributes.name} usunięty</span>
            </div>
          </div>
        )}
      )}
    </div>
    </>
  );
}

export default Meallist;