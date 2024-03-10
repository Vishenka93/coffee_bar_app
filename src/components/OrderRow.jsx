import Button from "react-bootstrap/Button";
// import { getOrderAmount } from "../helpers/GetOrderAmount";

function OrderRow({ id, name, price, quantity, itemChangeQuantity }) {
    return (
        <div>
            <div className="order-item" key={id}>
                <Button onClick={() => itemChangeQuantity(id, -1)}>-</Button>
                {name} {price} x {quantity} = {price * quantity} UAH
                <Button onClick={() => itemChangeQuantity(id, 1)}>+</Button>
            </div>
        </div>
    );
}

export default OrderRow;
