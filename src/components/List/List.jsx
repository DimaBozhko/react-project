
import styles from "./List.module.scss";
import ListItem from "../ListItem/ListItem";


const List = () => {

return (
        <div className="container">
            <h2 className={styles.wishlist__title}>Wishlist</h2>
            <div className={styles.list}>
                <ListItem/>
            </div>
        </div>        
    )
}

export default List;