
// get database data

const getDatabase = () => {
    let orderList;

    const storedOrder = localStorage.getItem('order-list');

    if (storedOrder) {
        orderList = JSON.parse(storedOrder);
    }
    else {
        orderList = {}
    }
    return orderList;
};



// organized local storage cart

const addToDatabase = id => {

    let orderList;

    // get the shopping Cart from local storage
    // [shopping cart টা আছে কিনা check করছি]

    const storedOrder = localStorage.getItem('order-list');

    if (storedOrder) {
        orderList = JSON.parse(storedOrder);
    }
    else {
        orderList = {}
    }

    // আমরা এই code গুলোর বদলে এখন getStoredCart কে call করতে পারি
    // উপরের code গুলো আমরা getStoredCart এ বসিয়েছি

    // একে call করতে পারি: getDatabase();



    // add quantity
    const quantity = orderList[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        orderList[id] = newQuantity;
    }
    else {
        orderList[id] = 1;
    }

    // set item to local storage
    localStorage.setItem('order-list', JSON.stringify(orderList));
};

export {
    getDatabase,
    addToDatabase
};