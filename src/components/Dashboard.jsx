import Button from "react-bootstrap/Button";
import { elements } from "../consts/Reports";
import { useState } from "react";
import MainScreen from "./MainScreen";
import Statistic from "./Statistic";

function Dashboard({
    addItemToOrder,
    clearOrder,
    currentOrder,
    itemChangeQuantity,
    confirmOrder,
    orders,
}) {
    const [selectedDashBlock, setSelectedDashBlock] = useState(elements[0]);
    const [desplayDash, setDesplayDash] = useState(true);
    // console.log(selectedDashBlock);

    const maping = {
        [elements[0]]: (
            <MainScreen
                addItemToOrder={addItemToOrder}
                clearOrder={clearOrder}
                currentOrder={currentOrder}
                itemChangeQuantity={itemChangeQuantity}
                confirmOrder={confirmOrder}
                orders={orders}
                desplayDash={desplayDash}
            />
        ),
        [elements[1]]: <Statistic orders={orders} desplayDash={desplayDash} />,
        //   [elements[2]]: <Report3 orders={orders} />,
    };

    return (
        <div className="main">
            {maping[selectedDashBlock]}
            <div
                className={`wrapper-dashboard ${
                    desplayDash ? "dashboard-close" : "dashboard-open"
                }`}
            >
                <div className="dashboard-btn">
                    <Button
                        className="btn-close"
                        onClick={() => setDesplayDash(!desplayDash)}
                    ></Button>
                </div>

                <h1 className="dashboard-title">Coffee Shop</h1>
                <nav className="dashboard-menu">
                    <ul className="dashboard-items">
                        {elements.map((el) => (
                            <li
                                key={el}
                                className="dashboard-item"
                                onClick={() => setSelectedDashBlock(el)}
                            >
                                <a href="#">{el}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Dashboard;
