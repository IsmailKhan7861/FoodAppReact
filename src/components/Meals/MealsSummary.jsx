import styles from "./MealsSummary.module.css";

const MealsSummary = () =>{
    return (
        <section className={styles.summary}>
            <h2>Delicious Food, Delivered to You</h2>

            <p>
                Choose your favorite meal from our broad selection of available meals and enjoy a delecious lunch time or dinner at Home. 
            </p>

            <p>
                All our meals are cooked with hight-quality ingredeints,just-in-time and of course by experienced chefs!
            </p>
        </section>
    )
}

export default MealsSummary;