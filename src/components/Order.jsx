import OrderRow from "./OrderRow";
import { getOrderAmount } from "../helpers/GetOrderAmount";
function Order({ currentOrder, itemChangeQuantity }) {
    const amount = getOrderAmount(currentOrder);

    console.log(amount);

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
        </div>
    );
}

export default Order;
