function ProductCard({ img, id, name, price, addItemToOrder }) {
    return (
        <div
            className="product-card"
            onClick={() => addItemToOrder(id, name, price)}
        >
            <img src={img} alt="img" />
            <p>{name}</p>
            <p>{price} UAH</p>
        </div>
    );
}

export default ProductCard;
