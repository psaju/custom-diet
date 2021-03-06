import { useState, useEffect } from "react";
import { getStringObject, getSingleMeal, getSingleAllergens } from '../Scripts/Helpers'
import MealCalendar from "./MealCalendar";
import MealReplacements from "./MealReplacements";

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
    <MealCalendar dates={dates} activeDate={activeDate} setActiveDate={setActiveDate} setActiveReplacements={setActiveReplacements} replacements={replacements} activeReplacements={activeReplacements} menu={props.menu}/>
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
                  <span className="meal-content-nutrients-item-name">Bia??ko</span><span>{Math.round(mealObj.composition.summary.proteins)}g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">W??glowodany</span><span>{Math.round(mealObj.composition.summary.carbohydrates)}g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">T??uszcze</span><span>{Math.round(mealObj.composition.summary.fats)}g</span>
                </div>
                <div className="meal-content-nutrients-item">
                  <span className="meal-content-nutrients-item-name">Kaloryczno????</span><span>{Math.round(mealObj.composition.summary.calories)} kcal</span>
                </div>
              </div>

              {allergensArray.length ? 
                <div className="meal-content-alergens">
                  <span className="green">Alergeny:</span>
                  {allergensArray.join(", ")}
                </div> : 
                <div className="meal-content-alergens">
                  <span className="green">Alergeny:</span>
                  brak
                </div>
              }

            </div>
            <div className="meal-disabled">
              <i className="icon-meal"></i>
              <a className="meal-restore btn-large" data-mealid="1">Przywr????</a>
              <span className="meal-disabled-info">Posi??ek {mealObj.meal.attributes.name} usuni??ty</span>
            </div>
          </div>
        )}
      )}
    </div>

    {showReplacements === true ? 
      <MealReplacements mealobj={activeMeal} date={activeDate} menu={props.menu} activeSystemId={props.activeSystemId} activeCalorieCode={props.activeCalorieCode}/> : ''
    }
    </>
  );
}

export default Meallist;