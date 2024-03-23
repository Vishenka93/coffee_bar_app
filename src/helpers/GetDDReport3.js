import getReports3 from "./getReport3";

function GetDDReport3(orders) {
    const bodyRows = getReports3(orders).map(([date, { totalPerDay }]) => [
        date,
        totalPerDay,
    ]);

    console.log(orders);
    const rows = getReports3(orders);
    let total = 0;
    rows.forEach((el) => {
        total += el[1].totalPerDay;
    });

    console.log(bodyRows);
    const dd = {
        content: [
            { text: "Report3", fontSize: 20, margin: [0, 0, 0, 20] },

            {
                table: {
                    widths: [200, "auto"],
                    heights: 20,
                    body: [
                        [
                            { text: "Date", fontSize: 14, bold: true },
                            "totalPerDay",
                        ],
                        ...bodyRows,

                        [
                            {
                                bold: true,
                                colSpan: 2,
                                border: [false, false, false, false],
                                fillColor: "#eeffee",
                                text: `Всього замовлень на сумму ${total} грн`,
                            },
                        ],
                    ],
                },
            },
        ],
    };
    return dd;
}

export default GetDDReport3;
