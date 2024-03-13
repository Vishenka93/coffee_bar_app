import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { reports } from "../consts/Reports";
import Report1 from "../components/Reports/Report1";
import Report2 from "../components/Reports/Report2";
import Report3 from "../components/Reports/Report3";

function Statistic({ orders }) {
    const [selectedReport, setSelectedReport] = useState(reports[0]);

    const maping = {
        [reports[0]]: <Report1 orders={orders} />,
        [reports[1]]: <Report2 orders={orders} />,
        [reports[2]]: <Report3 orders={orders} />,
    };

    return (
        <>
            <Dropdown onSelect={(eventKey) => setSelectedReport(eventKey)}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {selectedReport}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {reports.map((el) => (
                        <Dropdown.Item key={el} eventKey={el}>
                            {el}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            {maping[selectedReport]}
        </>
    );
}

export default Statistic;
