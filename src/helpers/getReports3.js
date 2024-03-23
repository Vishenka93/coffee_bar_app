import getReport2 from "./getReport2";

function getReports3(orders) {
    const items = {};
    const everyOrder = getReport2(orders);

    everyOrder.forEach(({ date, amount }) => {
        const cutDate = date.slice(0, 11);

        if (items[cutDate] === undefined) {
            items[cutDate] = {
                totalPerDay: 0,
            };
        }

        items[cutDate].totalPerDay += amount;
    });
    console.log(items);
    return Object.entries(items);
}

export default getReports3;
