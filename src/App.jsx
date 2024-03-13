import Order from "./components/Order";
import MainScreen from "./components/MainScreen";
import { useState, useEffect } from "react";
import GetCurrentDateStr from "./helpers/GetCurrentDateStr";
import Statistic from "./components/Statistic";

const local = localStorage.getItem("orders");
const localOrders = local === null ? [] : JSON.parse(local);

function App() {
    const [orders, setOrders] = useState(localOrders);
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

    function clearOrder() {
        setCurrentOrder([]);
    }

    function confirmOrder() {
        setOrders((prev) => [
            ...prev,
            {
                order: currentOrder,
                date: Date.now(),
            },
        ]);
        clearOrder();
    }

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    return (
        <div className="wrapper">
            <MainScreen addItemToOrder={addItemToOrder} />
            <Order
                cancelOrder={clearOrder}
                currentOrder={currentOrder}
                itemChangeQuantity={itemChangeQuantity}
                confirmOrder={confirmOrder}
            />
            <Statistic orders={orders} />
        </div>
    );
}

export default App;
