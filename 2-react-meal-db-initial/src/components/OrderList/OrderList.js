import React from 'react';

const OrderList = (props) => {
    const { orders } = props;

    // database এ stored থাকা order summary কে UI তে দেখাবো এখানে
    /* 
    data load করবো restaurant component এ কারণ তা meals data load
    এর উপর depend করবে

    orders এর value তে database এর value set করে দেয়ায় এবার array
    তে 3 টা object থাকায় orders.length হয়ে গেছে 3 টা

    তাই arrayর meal এর quantity গুলোকে যোগ করে দেখাতে হবে।
    */

    let count = 0;

    for (const meal of orders) {
        count = count + meal.quantity;
    }

    // reduce method দেখতে হবে

    /* 
    From MDN:

    const array = [15, 16, 17, 18, 19];

    function reducer(previous, current, index, array) {
    const returns = previous + current;
    console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
    return returns;
    }

    array.reduce(reducer);

    */


    return (
        <div>
            <h2>Order List</h2>
            {/* <h4>Items Ordered: {orders.length}</h4> */}
            <h4>Items Ordered: {count}</h4>
        </div>
    );
};

export default OrderList;