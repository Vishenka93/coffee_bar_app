import OrderRow from "./OrderRow";
import { getOrderAmount } from "../helpers/GetOrderAmount";
import Button from "react-bootstrap/Button";

function Order({
    currentOrder,
    itemChangeQuantity,
    cancelOrder,
    confirmOrder,
}) {
    const amount = getOrderAmount(currentOrder);

    return (
        <div className="order">
            {currentOrder.map(({ id, name, price, quantity }) => (
                <OrderRow
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    quantity={quantity}
                    itemChangeQuantity={itemChangeQuantity}
                />
            ))}
            <p>total: {amount} UAH</p>
            {currentOrder.length !== 0 && (
                <>
                    <Button onClick={() => cancelOrder()}>Cancel</Button>
                    <Button onClick={() => confirmOrder()}>Confirm</Button>
                </>
            )}
        </div>
    );
}

export default Order;
