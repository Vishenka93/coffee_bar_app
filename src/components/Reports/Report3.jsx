import { useEffect, useState } from "react";
import getReports3 from "../../helpers/getReports3";
import GenereatPdf from "../../helpers/GenereatPdf";
import GetDDReport3 from "../../helpers/GetDDReport2";
import Button from "react-bootstrap/Button";

function Report3({ orders }) {
    const [rows, setRows] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    console.log(rows);
    useEffect(() => {
        const newRows = getReports3(orders);
        GetDDReport3(orders);
        setRows(newRows);

        let total = 0;
        newRows.forEach((el) => {
            total += el[1].totalPerDay;
        });
        setTotalAmount(total);
    }, [orders]);

    return (
        <div className="reports">
            <Button
                className="button-down"
                onClick={() => {
                    const dd = GetDDReport3(orders);
                    GenereatPdf(dd);
                }}
            >
                pdf
            </Button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(([date, { totalPerDay }]) => (
                        <tr key={date}>
                            <td>{date}</td>
                            <td>{totalPerDay}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td>{totalAmount}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Report3;
