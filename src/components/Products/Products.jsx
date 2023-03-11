const Products = () => {
    const productObj = [
        {
            imgSrc: "img/product-01.jpg",
            text: "Hoodie with pocket",
            price: "$79.00",
            id: 1
        },
        {
            imgSrc: "img/product-02.jpg",
            text: "Flowers cotton dress",
            price: "$79.00",
            id: 2
        },
        {
            imgSrc: "img/product-03.jpg",
            text: "Hoodie with pocket",
            price: "$79.00",
            id: 3
        },
        {
            imgSrc: "img/product-04.jpg",
            text: "Oversize cotton sweatshirt",
            price: "$79.00",
            id: 4
        },
        {
            imgSrc: "img/product-05.jpg",
            text: "Striped cotton-blend sweatshirt",
            price: "$79.00",
            id: 5
        },
        {
            imgSrc: "img/product-06.jpg",
            text: "Striped cotton-blend sweatshirt",
            price: "$79.00",
            id: 6
        },
        {
            imgSrc: "img/product-07.jpg",
            text: "Flowers cotton dress",
            price: "$79.00",
            id: 7
        },
        {
            imgSrc: "img/product-08.jpg",
            text: "Hoodie with pocket",
            price: "$79.00",
            id: 8
        },
    ]
    
    
    return (
            <section className="products">
            <div className="containter">
                <h2 className="products__title">This Week's Highlights</h2>
                <div className="products__grid">
                    {productObj.map(item => {
                        return  <div key={item.id} className="product">
                                    <div className="products__image">
                                        <a href="/" className="products__image-block">
                                        <img src={item.imgSrc} alt="Product 01" />
                                        </a>

                                        <a href="/" className="add-to-wishlist">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                        </a>
                                    </div>
                                    <div className="product__body">
                                        <h3>
                                        <a href="/">{item.text}</a>
                                        </h3>
                                        <p>{item.price}</p>
                                    </div>
                                </div>                            
                    })}
                </div>
                <div className="products__bottom">
                        <a href="/" className="btn btn-outline-primary"> Shop Now </a>
                </div>
            </div>
        </section>
    )
}

export default Products;