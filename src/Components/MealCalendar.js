import { useState, useEffect } from 'react';
import {getDateObject, getMeals} from '../Scripts/Helpers';


function MealCalendar(props) {

  useEffect(() => {
    props.setActiveDate(props.dates[0]);
  }, [])

  function toggleDate(elem) {
    getMeals(props.replacements.filter(x => x.indexOf(elem) === 0)).then(response => {
      props.setActiveReplacements([...response]);
    });
    props.setActiveDate(elem);
    
  }

  return (
    <>
      <div id="meal-calendar">
        {props.dates.map((item, i) => {
          let dateObj = getDateObject(item);
          return (
            <span className={item === props.activeDate ? "meal-calendar-date-wrapper active" : "meal-calendar-date-wrapper"} key={i}  onClick={() => toggleDate(item)}>
              <span className={item === props.activeDate ? "meal-calendar-date active" : "meal-calendar-date"} data-date={item}>
                <span>Dzień {i + 1}</span>
                <span>{dateObj.dayName}, {dateObj.day}</span>
                <span>{dateObj.monthName}</span>
              </span>
            </span>
          )
        })}
      </div>
    </>
  )
}

export default MealCalendar;