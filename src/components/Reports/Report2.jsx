import getReport2 from "../../helpers/getReport2";
import GenereatPdf from "../../helpers/GenereatPdf";
import GetDDReport2 from "../../helpers/GetDDReport2";
import Button from "react-bootstrap/Button";

function Report2({ orders }) {
    const rows = getReport2(orders);
    GetDDReport2(orders);

    let totalAmount = 0;

    rows.forEach(({ amount }) => {
        totalAmount += amount;
    });

    return (
        <div className="reports">
            <Button
                className="button-down"
                onClick={() => {
                    const dd = GetDDReport2(orders);
                    GenereatPdf(dd);
                }}
            >
                pdf
            </Button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Bakery</th>
                        <th>Drinks</th>
                        <th>Deserts</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(({ date, bakery, drinks, deserts, amount }) => (
                        <tr key={date}>
                            <td>{date}</td>
                            <td>{bakery}</td>
                            <td>{drinks}</td>
                            <td>{deserts}</td>
                            <td>{amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                Всього замовлень {rows.length} на сумму {totalAmount} UAH
            </p>
        </div>
    );
}

export default Report2;
