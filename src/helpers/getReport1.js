import { products } from "../consts/Products";

function getReport1(orders) {
    const items = {};
    const date = new Date();
    const curentMonth = date.getMonth();
    const curentYear = date.getFullYear();

    products.forEach(({ name, price }) => {
        items[name] = {
            price: price,
            quantity: 0,
        };
    });
    orders
        .filter((order) => {
            const d = new Date(order.date);
            const m = d.getMonth();
            const year = d.getFullYear();
            return m === curentMonth && year === curentYear;
        })
        .forEach(({ order }) =>
            order.forEach(({ name, quantity }) => {
                items[name].quantity += quantity;
            })
        );
    return Object.entries(items)
        .map(([name, { price, quantity }]) => {
            return {
                name,
                price,
                quantity,
            };
        })
        .sort((a, b) => b.quantity - a.quantity);
}

export default getReport1;

{
    /* <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th> */
}
