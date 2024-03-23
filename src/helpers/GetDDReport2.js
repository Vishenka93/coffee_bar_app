import getReport2 from "./getReport2";

function GetDDReport2(orders) {
    const bodyRows = getReport2(orders).map(
        ({ date, bakery, drinks, deserts, amount }) => [
            date,
            drinks,
            bakery,
            deserts,
            amount,
        ]
    );

    const rows = getReport2(orders);
    let totalAmount = 0;

    rows.forEach(({ amount }) => {
        totalAmount += amount;
    });

    //  console.log(bodyRows);
    const dd = {
        content: [
            { text: "Report2", fontSize: 20, margin: [0, 0, 0, 20] },

            {
                table: {
                    widths: [200, "auto", "auto", "auto", "auto"],
                    heights: 20,
                    body: [
                        [
                            { text: "Date", fontSize: 14, bold: true },
                            "drinks",
                            "bakery",
                            "deserts",
                            "Amount",
                        ],
                        ...bodyRows,

                        [
                            {
                                bold: true,
                                colSpan: 5,
                                border: [false, false, false, false],
                                fillColor: "#eeffee",
                                text: `Всього замовлень ${rows.length} на сумму ${totalAmount} грн`,
                            },
                        ],
                    ],
                },
            },
        ],
    };
    return dd;
}

export default GetDDReport2;
