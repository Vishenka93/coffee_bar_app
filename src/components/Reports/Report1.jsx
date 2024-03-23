import getReport1 from "../../helpers/getReport1";
import GetDDReport1 from "../../helpers/GetDDReport1";
import GenereatPdf from "../../helpers/GenereatPdf";
import Button from "react-bootstrap/Button";

function Report1({ orders }) {
    const rows = getReport1(orders);
    let totalQuantity = 0;
    let totalAmount = 0;
    GetDDReport1(orders);

    rows.forEach(({ price, quantity }) => {
        totalQuantity += quantity;
        totalAmount += quantity * price;
    });

    return (
        <div className="reports">
            <Button
                className="button-down"
                onClick={() => {
                    const dd = GetDDReport1(orders);
                    GenereatPdf(dd);
                }}
            >
                pdf
            </Button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(({ name, price, quantity }) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td>{price * quantity}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td>-</td>
                        <td>{totalQuantity}</td>
                        <td>{totalAmount} UAH</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Report1;
