import getReport1 from "./getReport1";

function GetDDReport1(orders) {
    const bodyRows = getReport1(orders).map(({ name, price, quantity }) => [
        name,
        price,
        quantity,
        price * quantity,
    ]);

    const rows = getReport1(orders);
    let totalAmount = 0;
    let totalQuantity = 0;

    rows.forEach(({ price, quantity }) => {
        totalAmount += quantity * price;
        totalQuantity += quantity;
    });

    const dd = {
        content: [
            { text: "Report1", fontSize: 20, margin: [0, 0, 0, 20] },

            {
                table: {
                    widths: [200, "auto", "auto", "auto"],
                    heights: 20,
                    body: [
                        [
                            { text: "Name", fontSize: 14, bold: true },
                            "Price",
                            "Quantity",
                            "Amount",
                        ],
                        ...bodyRows,

                        [
                            { text: "Total:", bold: true },
                            "",
                            [{ fillColor: "#333", text: "" }, totalQuantity],
                            totalAmount,
                        ],
                    ],
                },
            },
        ],
    };
    return dd;
}

export default GetDDReport1;
