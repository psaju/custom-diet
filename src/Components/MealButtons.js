function MealButtons(props) {

  return (
    <div id="meal-buttons">
      {props.orderData?.data?.productsResults?.map((item, i) => {
        return (
            <button key={item.basketPosition} onClick={() => props.togglePopup(item.basketPosition, item.productId, item.productCode)} basketposition={item.basketPosition}>{item.productName}</button>
        )
      })}
    </div>
  );
}

export default MealButtons;