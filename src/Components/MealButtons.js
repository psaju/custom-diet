function MealButtons(props) {

  return (
    <div id="meal-buttons" key="meal-buttons">
      {props.orderData?.data?.productsResults?.map((item, i) => {
        return (
          <>
            <button onClick={() => props.togglePopup(item.basketPosition)} basketposition={item.basketPosition} key={item.basketPosition}>{item.productName}</button>
          </>
        )
      })}
    </div>
  );
}

export default MealButtons;