function getReport2(orders) {
    const items = {};

    orders.forEach(({ date, order }) => {
        // const q = new Date(date);
        // const datee = q.toString().slice(4, 24);
        // console.log(datee);
        items[date] = {
            bakery: 0,
            drinks: 0,
            deserts: 0,
            amount: 0,
        };

        order.forEach((item) => {
            if (item.category === "bakery") {
                items[date].bakery += 1;
                items[date].amount += item.quantity * item.price;
            } else if (item.category === "drinks") {
                items[date].drinks += 1;
                items[date].amount += item.quantity * item.price;
            } else if (item.category === "deserts") {
                items[date].deserts += 1;
                items[date].amount += item.quantity * item.price;
            }
        });
    });

    // console.log(items);
    return Object.entries(items).map(
        ([date, { drinks, bakery, deserts, amount }]) => {
            return {
                date,
                drinks,
                bakery,
                deserts,
                amount,
            };
        }
    );
}

export default getReport2;
