function FoodListItem(props) {
  return (
    <div>
    {
      props.foodData.haveTried && (<h1>Absolutely!</h1>)
    }

      <ul>
       <li>{props.foodData.title} is delicious.
       {props.foodData.rating && (<h2>No Rating</h2>)}
       I give it a rating of {props.foodData.rating}.
       <p>{props.foodData.description}. </p>
  
      <img src={props.foodData.image} alt="lasagna"/>
       </li>
    </ul>
  </div>
  )
}

export default FoodListItem;