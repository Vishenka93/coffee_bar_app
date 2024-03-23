import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import { categories } from "../consts/Categories";
import { products } from "../consts/Products";
import Button from "react-bootstrap/Button";
import Order from "./Order";
import { useState } from "react";

function MainScreen({
    addItemToOrder,
    clearOrder,
    currentOrder,
    itemChangeQuantity,
    confirmOrder,
    desplayDash,
}) {
    const [category, setCategory] = useState("");

    function seleltCategory(name) {
        setCategory(name);
    }
    return (
        <div className={`mainscreen ${desplayDash ? "b" : "a"}`}>
            {!category &&
                categories.map(({ id, name, img }) => (
                    <CategoryCard
                        key={id}
                        id={id}
                        name={name}
                        img={img}
                        handleClick={seleltCategory}
                    />
                ))}
            {category && (
                <div className="products-main">
                    <Button variant="dark" onClick={() => setCategory("")}>
                        Home
                    </Button>
                    <div className="product-cards">
                        {products
                            .filter((item) => item.category === category)
                            .map(({ id, name, img, price, category }) => (
                                <ProductCard
                                    addItemToOrder={addItemToOrder}
                                    key={id}
                                    name={name}
                                    img={img}
                                    price={price}
                                    id={id}
                                    category={category}
                                />
                            ))}
                    </div>
                </div>
            )}
            <Order
                cancelOrder={clearOrder}
                currentOrder={currentOrder}
                itemChangeQuantity={itemChangeQuantity}
                confirmOrder={confirmOrder}
            />
        </div>
    );
}

export default MainScreen;
