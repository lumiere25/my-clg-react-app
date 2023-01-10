import styles from "../components/Home/Home.module.css";
import dog from "../components/Assets/dog.jpg";
import beach from "../components/Assets/beach.jpg";
import house from "../components/Assets/home.jpg";


const Home = () => {

return(
      
      <>
      <section>
      <div className={styles.intro_one}>
       <p>Find your special place</p>
      </div>
     <div className={styles.images_container}>
     <div>
     <img className={styles.card_1} src={beach} alt="name"/>
     <p className={styles.card_text}>Immerse yourself in calm, wonder and delight your senses along the beach</p>
     </div>
     <div>
     <img className={styles.card_2} src={dog} alt="name"/>
     <p className={styles.card_text}>Immerse yourself in calm, wonder and delight your senses along the beach</p>
     </div>
     <div>
     <img className={styles.card_3}src={house} alt="name"/>
     <p className={styles.card_text_3}>Immerse yourself in calm, wonder and delight your senses along the beach</p>
     </div>
     </div>   
    
  
     <div className={styles.content_container}>
      <h2 className={styles.home_heading}>Home is where the heart is</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      </div>
    </section>

    </>
  );
};

export default Home;
