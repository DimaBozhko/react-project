const Category = () => {
    return (
        <section className="category">
            <div className="container">
            <h2 className="category__title">This Season Collection</h2>
            <div className="category__grid">
                <div className="category__item">
                <img src="img/banner-20.jpg" alt="Glasses" />

                <div className="category__overlay">
                    <a href="#" className="btn btn-dark">Glasses</a>
                </div>
                </div>

                <div className="category__item">
                <img src="img/banner-21.jpg" alt="Sneakers" />

                <div className="category__overlay">
                    <a href="#" className="btn btn-dark">Sneakers</a>
                </div>
                </div>

                <div className="category__item">
                <img src="img/banner-22.jpg" alt="Handbags" />

                <div className="category__overlay">
                    <a href="#" className="btn btn-dark">Handbags</a>
                </div>
                </div>
            </div>
            </div>
        </section>
    )

}

export default Category;