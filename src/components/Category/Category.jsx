import styles from "./Category.module.scss";

const Category = () => {
    return (
        <section className={styles.category}>
            <div className={`${styles.container} container`}>
            <h2 className={styles.category__title}>This Season Collection</h2>
            <div className={styles.category__grid}>
                <div className={styles.category__item}>
                <img src="img/banner-20.jpg" alt="Glasses" />

                <div className={styles.category__overlay}>
                    <a href="#" className="btn btn-dark">Glasses</a>
                </div>
                </div>

                <div className={styles.category__item}>
                <img src="img/banner-21.jpg" alt="Sneakers" />

                <div className={styles.category__overlay}>
                    <a href="#" className="btn btn-dark">Sneakers</a>
                </div>
                </div>

                <div className={styles.category__item}>
                <img src="img/banner-22.jpg" alt="Handbags" />

                <div className={styles.category__overlay}>
                    <a href="#" className="btn btn-dark">Handbags</a>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Category;