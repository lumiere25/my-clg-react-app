import styles from "../FoodGallery/Food.module.css";

//Here we are passing our data as props to fill in our images and descriptions.
// We are attaching our styles variable that is connected to our stylesheet to the item we want to style.
 function FoodListItem(props) {
   return (
    <div className={styles.items_container}>
    {
      !props.foodData.haveTried && (<h1 className={styles.desc_text}>Must Try!</h1>)
    }

      <ul className={styles.ul_texts}>
       <li>{props.foodData.title} is delicious.
       {props.foodData.rating > 0 ? `${props.foodData.rating}/5` : `No Rating`}

       <p>{props.foodData.description}. </p>
  
      <img className={styles.images} src={props.foodData.image} alt="some yummy food right here"/>
       </li>
     </ul>
  </div>
  )
}

export default FoodListItem;