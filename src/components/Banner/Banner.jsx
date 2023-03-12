import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={`${styles.container} container`}>
            <div className={styles.banner__wrapper}>
                <img src="img/image-home-07.jpg" alt="" />
                <div className={styles.banner__overlay}>
                <div>
                    <h1 className={styles.banner__title}>Waffle Hooded Coat</h1>
                    <a href="/" className="btn btn-dark">Shop Now</a>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Banner;