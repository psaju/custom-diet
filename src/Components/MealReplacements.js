import { useState, useEffect } from "react";
import { getReplacementMeals } from '../Scripts/Helpers';

function MealReplacements(props) {

  const [replacements, setReplacements] = useState([]);
  const { mealobj, date, menu, activeSystemId, activeCalorieCode } = props;

  useEffect(() => {
    const replacements = getReplacementMeals(mealobj, date, menu, activeSystemId, activeCalorieCode);
  },[]);

  return ( 
    <div>Tu pojawią się twoje zamienniki</div>
   );
}

export default MealReplacements;