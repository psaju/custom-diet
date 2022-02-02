//import axios from "axios";

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
      "orderId": "iaisystem-103",
      "clientLogin": "iaisystem",
      "orderAddDate": "2022-01-26 10:32:28",
      "orderStatus": "payment_waiting",
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
        "clientDeliveryAddressCity": "Piotrk\u00f3w Trybunalski",
        "clientDeliveryAddressCountry": "Polska",
        "clientDeliveryAddressCountryId": "pl",
        "clientDeliveryAddressPhone1": "123123123",
        "clientDeliveryAddressPhone2": "",
        "clientDeliveryAddressProvinceId": "",
        "clientDeliveryAddressProvince": ""
      },
      "productsResults": [
        {
          "productOrderPriceBaseCurrency": "65.99",
          "productOrderPriceNetBaseCurrency": "61.10",
          "productOrderAdditional": "<position>1643189478<\/position><priceformula>4<\/priceformula>",
          "basketPosition": "0",
          "priceFormulaParameters": [
            {
              "parameterId": "calories",
              "parameterName": "Kaloryczno\u015b\u0107",
              "parameterValues": [
                {
                  "valueId": "1000",
                  "valueName": "1000 kcal"
                }
              ]
            },
            {
              "parameterId": "KZS",
              "parameterName": "KZS",
              "parameterValues": [
                {
                  "valueId": "KZS1",
                  "valueName": "NR-PLUS-1000-5"
                }
              ]
            },
            {
              "parameterId": "periodSelect",
              "parameterName": "Okres zam\u00f3wienia",
              "parameterValues": [
                {
                  "valueId": "7w",
                  "valueName": "1 tydzie\u0144 (z weekendami)"
                }
              ]
            },
            {
              "parameterId": "periodDates",
              "parameterName": "Daty",
              "parameterValues": [
                {
                  "valueId": "",
                  "valueName": "Okres zam\u00f3wienia: 2022-02-01, 2022-02-02, 2022-02-03, 2022-02-04, 2022-02-05, 2022-02-06, 2022-02-07"
                }
              ]
            }
          ],
          "productPriceLog": "<ul><li>Pocz\u0105tkowa cena brutto: detaliczna 110.99z\u0142, hurtowa: 110.99z\u0142, minimalna: 0.03z\u0142<\/li><li>Pocz\u0105tkowa cena netto: detaliczna 102.77z\u0142, hurtowa: 102.77z\u0142, minimalna: 0.03z\u0142<\/li><li>Stawka VAT: 8%<\/li><li>Waluta klienta: PLN, waluta produktu: PLN<\/li><li>Cena brutto dla sklepu detaliczna: 110.99z\u0142, hurtowa: 110.99z\u0142, minimalna: 0.03z\u0142<\/li><li>Cena brutto dla sklepu wyliczona za pomoc\u0105 formu\u0142y kalkuluj\u0105cej cen\u0119: 65.99z\u0142<\/li><li>Cena sprzeda\u017cy brutto zosta\u0142a wyliczona przez formu\u0142\u0119 JavaScript kalkuluj\u0105c\u0105 cen\u0119 na podstawie nast\u0119puj\u0105cych parametr\u00f3w:<ul><\/ul><\/li><li>function getProductDataFromEngine() { \nreturn {\n    \"iai:product_max_price_gross\": 110.99,\n    \"iai:number_of_items\": 7\n};\n}<\/li><li>Klient nie posiada rabatu<\/li><li>Warto\u015b\u0107 pozycji wynosi: 461.93z\u0142, ilo\u015b\u0107: 7<\/li><li>Warto\u015b\u0107 pozycji w walucie sklepu brutto: 461.93z\u0142, netto: 427.71z\u0142<\/li><li>Cena jednostkowa w walucie sklepu brutto: 65.99z\u0142, netto: 61.10z\u0142<\/li><li>Warto\u015b\u0107 pozycji w walucie klienta brutto: 461.93z\u0142, netto: 427.71z\u0142<\/li><li>Cena jednostkowa w walucie klienta brutto: 65.99z\u0142, netto: 61.10z\u0142<\/li><li>Array<\/li><\/ul>",
          "productId": "662",
          "productName": "Wyb\u00f3r menu - PLUS",
          "productCode": "",
          "sizeId": "uniw",
          "sizePanelName": "uniw",
          "productSizeCodeExternal": "NR-PLUS-5",
          "stockId": "1",
          "productQuantity": "7.000",
          "productWeight": 0,
          "productVat": "8.000",
          "productPanelPrice": 110.99,
          "productPanelPriceNet": 102.77,
          "remarksToProduct": "Okres zam\u00f3wienia: 2022-02-01, 2022-02-02, 2022-02-03, 2022-02-04, 2022-02-05, 2022-02-06, 2022-02-08 \nPodmienione posi\u0142ki: 2022-02-01#NR-ZO1000-5(1,3,4,5), 2022-02-02#NR-ZO1000-5(1,2,3,4,5), 2022-02-03#NR-ZO1000-5(1,2,3,4,5), 2022-02-04#NR-ZO1000-5(2,3,5), 2022-02-05#NR-ZO1000-5(1,2,3,4,5), 2022-02-01#NR-V1000-5(2), 2022-02-06#NR-ZO1000-5(1,2,3,4,5), 2022-02-08#NR-ZO1000-5(1,3,4,5), 2022-02-08#NR-V1000-5(2), 2022-02-04#NR-V1000-5(1), 2022-02-04#NR-BMG1000-5(4) \nWykluczone posi\u0142ki: ",
          "productSerialNumbers": null,
          "bundleId": "0",
          "productOrderPrice": 65.99,
          "productOrderPriceNet": 61.1,
          "orderSalesMode": "money",
          "versionName": null
        },
        {
          "productOrderPriceBaseCurrency": "71.99",
          "productOrderPriceNetBaseCurrency": "66.66",
          "productOrderAdditional": "<position>1643189502<\/position><priceformula>4<\/priceformula>",
          "basketPosition": "1",
          "priceFormulaParameters": [
            {
              "parameterId": "calories",
              "parameterName": "Kaloryczno\u015b\u0107",
              "parameterValues": [
                {
                  "valueId": "1500",
                  "valueName": "1500 kcal"
                }
              ]
            },
            {
              "parameterId": "KZS",
              "parameterName": "KZS",
              "parameterValues": [
                {
                  "valueId": "KZS3",
                  "valueName": "NR-PLUS-1500-5"
                }
              ]
            },
            {
              "parameterId": "periodSelect",
              "parameterName": "Okres zam\u00f3wienia",
              "parameterValues": [
                {
                  "valueId": "7w",
                  "valueName": "1 tydzie\u0144 (z weekendami)"
                }
              ]
            },
            {
              "parameterId": "periodDates",
              "parameterName": "Daty",
              "parameterValues": [
                {
                  "valueId": "",
                  "valueName": "Okres zam\u00f3wienia: 2022-02-01, 2022-02-02, 2022-02-03, 2022-02-04, 2022-02-05, 2022-02-06, 2022-02-07"
                }
              ]
            }
          ],
          "productPriceLog": "<ul><li>Pocz\u0105tkowa cena brutto: detaliczna 110.99z\u0142, hurtowa: 110.99z\u0142, minimalna: 0.03z\u0142<\/li><li>Pocz\u0105tkowa cena netto: detaliczna 102.77z\u0142, hurtowa: 102.77z\u0142, minimalna: 0.03z\u0142<\/li><li>Stawka VAT: 8%<\/li><li>Waluta klienta: PLN, waluta produktu: PLN<\/li><li>Cena brutto dla sklepu detaliczna: 110.99z\u0142, hurtowa: 110.99z\u0142, minimalna: 0.03z\u0142<\/li><li>Cena brutto dla sklepu wyliczona za pomoc\u0105 formu\u0142y kalkuluj\u0105cej cen\u0119: 71.99z\u0142<\/li><li>Cena sprzeda\u017cy brutto zosta\u0142a wyliczona przez formu\u0142\u0119 JavaScript kalkuluj\u0105c\u0105 cen\u0119 na podstawie nast\u0119puj\u0105cych parametr\u00f3w:<ul><\/ul><\/li><li>function getProductDataFromEngine() { \nreturn {\n    \"iai:product_max_price_gross\": 110.99,\n    \"iai:number_of_items\": 7\n};\n}<\/li><li>Klient nie posiada rabatu<\/li><li>Warto\u015b\u0107 pozycji wynosi: 503.93z\u0142, ilo\u015b\u0107: 7<\/li><li>Warto\u015b\u0107 pozycji w walucie sklepu brutto: 503.93z\u0142, netto: 466.60z\u0142<\/li><li>Cena jednostkowa w walucie sklepu brutto: 71.99z\u0142, netto: 66.66z\u0142<\/li><li>Warto\u015b\u0107 pozycji w walucie klienta brutto: 503.93z\u0142, netto: 466.60z\u0142<\/li><li>Cena jednostkowa w walucie klienta brutto: 71.99z\u0142, netto: 66.66z\u0142<\/li><li>Array<\/li><\/ul>",
          "productId": "662",
          "productName": "Wyb\u00f3r menu - PLUS",
          "productCode": "",
          "sizeId": "uniw",
          "sizePanelName": "uniw",
          "productSizeCodeExternal": "NR-PLUS-5",
          "stockId": "1",
          "productQuantity": "7.000",
          "productWeight": 0,
          "productVat": "8.000",
          "productPanelPrice": 110.99,
          "productPanelPriceNet": 102.77,
          "remarksToProduct": "Okres zam\u00f3wienia: 2022-02-01, 2022-02-02, 2022-02-03, 2022-02-04, 2022-02-05, 2022-02-06, 2022-02-15 \nPodmienione posi\u0142ki: 2022-02-01#NR-ZO1500-5(1,2,3,4,5), 2022-02-02#NR-ZO1500-5(2,3,4,5), 2022-02-03#NR-ZO1500-5(1,2,3,4,5), 2022-02-04#NR-ZO1500-5(1,2,3,4,5), 2022-02-05#NR-ZO1500-5(1,2,3,4,5), 2022-02-06#NR-ZO1500-5(1,2,3,4,5), 2022-02-02#NR-V1500-5(1), 2022-02-15#NR-ZO1500-5(1,2,3,4,5) \nWykluczone posi\u0142ki: ",
          "productSerialNumbers": null,
          "bundleId": "0",
          "productOrderPrice": 71.99,
          "productOrderPriceNet": 66.66,
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

export function splitString(){
  
}