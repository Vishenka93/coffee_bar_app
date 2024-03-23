function ProductCard({ img, id, name, price, category, addItemToOrder }) {
    return (
        <div
            className="product-card"
            onClick={() => addItemToOrder(id, name, price, category)}
        >
            <img src={img} alt="img" />
            <p>{name}</p>
            <p>{price} UAH</p>
        </div>
    );
}

export default ProductCard;
