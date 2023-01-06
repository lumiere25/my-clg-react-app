import FoodList from "../components/foodList/foodList";
import styles from "../components/FoodGallery/Food.module.css";

const FoodGallery = () => {
  return (
    <section>
      <h1 className={styles["intro_text"]}>Chrissa's food!</h1>
      <FoodList/>
    </section>
  );
};

export default FoodGallery;