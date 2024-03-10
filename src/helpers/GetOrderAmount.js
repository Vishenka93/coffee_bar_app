export function getOrderAmount(order) {
    let sum = 0;

    order.forEach(({ quantity, price }) => {
        sum += quantity * price;
    });

    return sum;
}
