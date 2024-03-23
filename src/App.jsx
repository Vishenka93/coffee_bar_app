import { useState, useEffect } from "react";
// import GetCurrentDateStr from "./helpers/GetCurrentDateStr";
// import Statistic from "./components/Statistic";
// import { Order, MainScreen } from "./components";
import Dashboard from "./components/Dashboard";
import GenereatPdf from "./helpers/GenereatPdf";

const local = localStorage.getItem("orders");
const localOrders = local === null ? [] : JSON.parse(local);

function App() {
    const [orders, setOrders] = useState(localOrders);
    const [currentOrder, setCurrentOrder] = useState([]);
    // const [orderDash, setOrderDash] = useState();

    function addItemToOrder(id, name, price, category) {
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
                    category: category,
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
                date: new Date().toString().slice(4, 24),
            },
        ]);
        clearOrder();
    }

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);
    // GenereatPdf();
    return (
        <div className="wrapper">
            <Dashboard
                addItemToOrder={addItemToOrder}
                clearOrder={clearOrder}
                currentOrder={currentOrder}
                itemChangeQuantity={itemChangeQuantity}
                confirmOrder={confirmOrder}
                orders={orders}
            />
        </div>
    );
}

export default App;
