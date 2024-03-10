import Order from "./components/Order";
import MainScreen from "./components/MainScreen";
import { useState } from "react";
// import { products } from "./consts/Products";

function App() {
    // const [orders, setOrders] = useState([]);
    const [currentOrder, setCurrentOrder] = useState([]);

    function addItemToOrder(id, name, price) {
        if (currentOrder.some((item) => item.id === id)) {
            setCurrentOrder((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item
                )
            );
        } else {
            setCurrentOrder((prev) => [
                ...prev,
                {
                    id: id,
                    name: name,
                    quantity: 1,
                    price: price,
                },
            ]);
        }
    }

    function itemChangeQuantity(id, amount) {
        setCurrentOrder((prev) =>
            prev
                .map((el) =>
                    el.id === id
                        ? {
                              ...el,
                              quantity: el.quantity + amount,
                          }
                        : el
                )
                .filter(({ quantity }) => quantity !== 0)
        );
    }

    console.log(currentOrder);

    return (
        <div className="wrapper">
            <MainScreen addItemToOrder={addItemToOrder} />
            <Order
                currentOrder={currentOrder}
                itemChangeQuantity={itemChangeQuantity}
            />
        </div>
    );
}

export default App;
