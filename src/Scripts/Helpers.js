//import axios from "axios";

const monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
const dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
const allergens = {
  gluten: {
    id: 1,
    type: 'gluten',
    name: {
      ger: 'Gluten',
      pol: 'gluten',
    }
  },
  crustaceans: {
    id: 2,
    type: 'crustaceans',
    name: {
      ger: 'Schaltier',
      pol: 'skorupiaki',
    }
  },
  egg: {
    id: 3,
    type: 'egg',
    name: {
      ger: 'Eier',
      pol: 'jaja',
    }
  },
  fish: {
    id: 4,
    type: 'fish',
    name: {
      ger: 'Fische',
      pol: 'ryby',
    },
  },
  peanuts: {
    id: 5,
    type: 'peanuts',
    name: {
      ger: 'Erdnüsse',
      pol: 'orzechy arachidowe',
    },
  },
  soybean: {
    id: 6,
    type: 'soybean',
    name: {
      ger: 'Soja',
      pol: 'soja',
    },
  },
  milk: {
    id: 7,
    type: 'milk',
    name: {
      ger: 'Milch',
      pol: 'mleko',
    },
  },
  almond: {
    id: 8,
    type: 'almond',
    name: {
      ger: 'Nüsse',
      pol: 'orzechy',
    },
  },
  celery: {
    id: 9,
    type: 'celery',
    name: {
      ger: 'Sellerie',
      pol: 'seler',
    },
  },
  mustard: {
    id: 10,
    type: 'mustard',
    name: {
      ger: 'Senf',
      pol: 'gorczyca',
    },
  },
  sesame: {
    id: 11,
    type: 'sesame',
    name: {
      ger: 'Sesam',
      pol: 'sezam',
    },
  },
  sulfide: {
    id: 12,
    type: 'sulfide',
    name: {
      ger: 'Sulfate',
      pol: 'siarczany',
    },
  },
  lupin: {
    id: 13,
    type: 'lupin',
    name: {
      ger: 'Lupinen',
      pol: 'łubin',
    }
  },
  mollusc: {
    id: 14,
    type: 'mollusc',
    name: {
      ger: 'Weichtiere',
      pol: 'mięczaki',
    }
  }
}

const allowedReplacements = {
  // dieta plus
  662: [1, 2, 5, 6],

  // dieta premium
  663: {
    'S': [
      { 'target_calories': 1200, 'menu_id': [1, 2, 3] },
      { 'target_calories': 1500, 'menu_id': [8, 10] }
    ],

  'M': [
    { 'target_calories': 1800, 'menu_id': [1, 2, 3, 5, 4, 6, 7, 13] },
    { 'target_calories': 2000, 'menu_id': [8, 10] }
  ],

  'L': [
    { 'target_calories': 2200, 'menu_id': [2, 3, 5, 4, 6, 7, 13] },
    { 'target_calories': 2500, 'menu_id': [8, 10] }
  ],

  'XL': [
    { 'target_calories': 2800, 'menu_id': [2, 3, 5, 4, 6, 7, 13] },
    { 'target_calories': 3000, 'menu_id': [8, 10] }
  ]
},

set: [1,2,3,4,5,6,7,8,9,10,11,13]
};

const allowedMeals = {
  4: [3],
  7: [2,3,4,5]
};


export function appendScripts() {
  const menuIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
  menuIds.forEach(element => {
    const url = `https://kreatordiet.iai-system.com/storage/shopmenu/menu_${element}.js?t=${new Date().getTime()}`;
    let script = document.createElement('script');
    console.log(url);
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
  });
}

export function getOrderData(data) {
  // axios.post('https://fitnesscatering.iai-system.com', {
  //   params: data
  // })
  // .then(function (response) {
  //   return response.json;
  // });

  /* eslint-disable no-useless-escape */
  const response = {
    "success": true,
    "data": {
      "orderId": "iaisystem-108",
      "clientLogin": "iaisystem",
      "orderAddDate": "2022-02-15 10:58:07",
      "orderStatus": "new",
      "orderNote": "",
      "clientDeliveryAddress": {
        "clientDeliveryAddressFirm": "",
        "clientDeliveryAddressType": "client",
        "clientDeliveryAddressPickupPointInternalId": null,
        "clientDeliveryAddressId": "18136",
        "clientDeliveryAddressFirstName": "Test",
        "clientDeliveryAddressLastName": "Test",
        "clientDeliveryAddressStreet": "testowa 15 12",
        "clientDeliveryAddressZipCode": "97-300",
        "clientDeliveryAddressCity": "Piotrków Trybunalski",
        "clientDeliveryAddressCountry": "Polska",
        "clientDeliveryAddressCountryId": "pl",
        "clientDeliveryAddressPhone1": "123123123",
        "clientDeliveryAddressPhone2": "",
        "clientDeliveryAddressProvinceId": "",
        "clientDeliveryAddressProvince": ""
      },
      "productsResults": [
        {
          "productOrderPriceBaseCurrency": "67.99",
          "productOrderPriceNetBaseCurrency": "62.95",
          "productOrderAdditional": "<position>1644919038</position><priceformula>4</priceformula>",
          "basketPosition": "0",
          "priceFormulaParameters": [
            {
              "parameterId": "calories",
              "parameterName": "Kaloryczność",
              "parameterValues": [
                {
                  "valueId": "1200",
                  "valueName": "1200 kcal"
                }
              ]
            },
            {
              "parameterId": "KZS",
              "parameterName": "KZS",
              "parameterValues": [
                {
                  "valueId": "KZS2",
                  "valueName": "NR-PLUS-1200-5"
                }
              ]
            },
            {
              "parameterId": "periodSelect",
              "parameterName": "Okres zamówienia",
              "parameterValues": [
                {
                  "valueId": "10",
                  "valueName": "2 tygodnie (bez weekendów)"
                }
              ]
            },
            {
              "parameterId": "periodDates",
              "parameterName": "Daty",
              "parameterValues": [
                {
                  "valueId": "",
                  "valueName": "Okres zamówienia: 2022-03-01, 2022-03-02, 2022-03-03, 2022-03-04, 2022-03-07, 2022-03-08, 2022-03-09, 2022-03-10, 2022-03-11, 2022-03-14"
                }
              ]
            }
          ],
          "productPriceLog": "<ul><li>Początkowa cena brutto: detaliczna 110.99zł, hurtowa: 110.99zł, minimalna: 0.03zł</li><li>Początkowa cena netto: detaliczna 102.77zł, hurtowa: 102.77zł, minimalna: 0.03zł</li><li>Stawka VAT: 8%</li><li>Waluta klienta: PLN, waluta produktu: PLN</li><li>Cena brutto dla sklepu detaliczna: 110.99zł, hurtowa: 110.99zł, minimalna: 0.03zł</li><li>Cena brutto dla sklepu wyliczona za pomocą formuły kalkulującej cenę: 67.99zł</li><li>Cena sprzedaży brutto została wyliczona przez formułę JavaScript kalkulującą cenę na podstawie następujących parametrów:<ul></ul></li><li>function getProductDataFromEngine() { \nreturn {\n    \"iai:product_max_price_gross\": 110.99,\n    \"iai:number_of_items\": 10\n};\n}</li><li>Klient nie posiada rabatu</li><li>Wartość pozycji wynosi: 679.90zł, ilość: 10</li><li>Wartość pozycji w walucie sklepu brutto: 679.90zł, netto: 629.54zł</li><li>Cena jednostkowa w walucie sklepu brutto: 67.99zł, netto: 62.95zł</li><li>Wartość pozycji w walucie klienta brutto: 679.90zł, netto: 629.54zł</li><li>Cena jednostkowa w walucie klienta brutto: 67.99zł, netto: 62.95zł</li><li>Array</li></ul>",
          "productId": "662",
          "productName": "Wybór menu - PLUS",
          "productCode": "",
          "sizeId": "uniw",
          "sizePanelName": "uniw",
          "productSizeCodeExternal": "NR-PLUS-5",
          "stockId": "1",
          "productQuantity": "10.000",
          "productWeight": 0,
          "productVat": "8.000",
          "productPanelPrice": 110.99,
          "productPanelPriceNet": 102.77,
          "remarksToProduct": "Okres zamówienia: 2022-03-01, 2022-03-02, 2022-03-03, 2022-03-04, 2022-03-07, 2022-03-08, 2022-03-09, 2022-03-10, 2022-03-11, 2022-03-14\r\nPodmienione posiłki: 2022-03-01#NR-ZO1200-5(1,2,3,4,5), 2022-03-02#NR-ZO1200-5(1,2,3,4,5), 2022-03-03#NR-ZO1200-5(1,2,3,4,5), 2022-03-04#NR-ZO1200-5(1,2,3,4,5), 2022-03-07#NR-ZO1200-5(1,2,3,4,5), 2022-03-08#NR-ZO1200-5(1,2,3,4,5), 2022-03-09#NR-ZO1200-5(1,2,3,4,5), 2022-03-10#NR-ZO1200-5(1,2,3,4,5), 2022-03-11#NR-ZO1200-5(1,2,3,4,5), 2022-03-14#NR-ZO1200-5(1,2,3,4,5)",
          "productSerialNumbers": null,
          "bundleId": "0",
          "productOrderPrice": 67.99,
          "productOrderPriceNet": 62.95,
          "orderSalesMode": "money",
          "versionName": null
        }
      ],
      "errorGenerally": "",
      "error": ""
    },
    "error": ""
  }

  return response;
}

export function getStringObject(string) {
  let dateArray = string.split(': ')[1].match(/\d{4}-\d{2}-\d{2}[, ]/gm).map(x => x.replace(',', '').replace(' ', ''));
  let replacementsArray = string.split(': ')[2].match(/\d(?<=\d)(.*?)(?=\))[)]/gm)
  return [dateArray, replacementsArray];
}

export function getDateObject(dateString) {
  const date = new Date(dateString);
  let dayName, monthName, day;

  day = date.getDate();
  dayName = dayNames[date.getDay()];
  monthName = monthNames[parseInt(dateString.split('-')[1]) - 1];

  return { day: day, dayName: dayName, monthName: monthName }
}

export async function getMeals(activeMealsArray) {
  let arr = [];
  activeMealsArray.forEach(element => {
    let date = element.match(/\d{4}-\d{2}-\d{2}/gm)[0];
    let dietCode = element.match(/(?<=#)(.*?)(?=\()/gm)[0];
    let mealCodes = element.match(/(?<=[(])(.*?)(?=\))/gm)[0].split(',');

    mealCodes.forEach(code => {
      arr.push({
        'date': date,
        'mealCode': code,
        'dietCode': dietCode,
      })
    })
  });

  arr.sort((a, b) => a.mealCode.localeCompare(b.mealCode));

  return arr;
}

export function getSingleMeal(menu, obj) {
  const date = obj.date;
  const mealCode = parseInt(obj.mealCode);
  const dietCode = obj.dietCode;
  const calories = parseInt(dietCode.match(/\d{4}/gm));

  const menuObject = menu.filter(x => x[Object.keys(x)].relations.versions.data.filter(y => y.attributes.diet_code === dietCode).length)[0]
  const singleMealObject = menuObject[Object.keys(menuObject)].relations.versions.data.filter(x => x.attributes.target_calories === calories)[0].schedules[date]?.meals.filter(m => m.meal.id === mealCode)[0]
  return singleMealObject;
}

export function getSingleAllergens(mealObj) {
  let tempArray = [];
  let allergensTempArray = mealObj?.composition?.items?.map(item => item.allergens);

  if (typeof allergensTempArray === 'undefined') return null;
  
  allergensTempArray.forEach(element => { tempArray = [...tempArray, ...element.map(a => a.name)] });
  
  let allergensArray = tempArray.filter((item, index) => {
    return (tempArray.indexOf(item) === index)
  });

  return translateAllergens(allergensArray);
}

export function translateAllergens(arr){
  return arr.map(a => allergens[a].name.pol)
}

export function getReplacementMeals (mealId, dateString, menu, activeSystemId, activeCaloriesCode) {
  const meals = [];
  let code;

  for (const d in menu) {

    code = d;
    
    if (typeof allowedReplacements[activeSystemId][activeCaloriesCode] != 'undefined') {
  
      for (let i = 0; i < allowedReplacements[activeSystemId][activeCaloriesCode].length; i++) {
  
        const element = allowedReplacements[activeSystemId][activeCaloriesCode][i];
        const idArray = element.menu_id;
        const calories = element.target_calories;
  
        for (let j = 0; j < idArray.length; j++) {
  
          const menuId = idArray[j];
          let menus = menu[menuId].filter(x => x.attributes.target_calories == calories);

          if(menus.length){
            if(typeof allowedMeals[menuId] != 'undefined' && allowedMeals[menuId]?.includes(mealId)){
              meals.push([menuId, menus[0].schedules[dateString].meals.filter(x => x.meal.id == mealId)[0], calories]);
            } else if (typeof allowedMeals[menuId] === 'undefined'){
              meals.push([menuId, menus[0].schedules[dateString].meals.filter(x => x.meal.id == mealId)[0], calories]);
            }     
          }        
        }
  
      }
  
    } else {
      for (let i = 0; i < allowedReplacements[activeSystemId].length; i++) {
  
        const element = allowedReplacements[activeSystemId][i];
        const calories = activeSystemId == 662 ?
        activeCaloriesCode :
        allowedReplacements[activeSystemId][activeCaloriesCode].filter(x => x.menu_id.includes(allowedReplacements[activeSystemId][activeCaloriesCode][0].menu_id[0]))[0].target_calories

  
  
          const menuId = element;
          let menus = menu[menuId].filter(x => x.attributes.target_calories == calories);

          if(menus.length){
            meals.push([menuId, menus[0].schedules[dateString].meals.filter(x => x.meal.id == mealId)[0], calories]);
          }        
    }
  }
  
    return meals;
  
  }
  
}