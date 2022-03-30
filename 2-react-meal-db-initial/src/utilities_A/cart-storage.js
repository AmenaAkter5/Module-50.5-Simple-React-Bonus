
// use local storage to manage cart data

// local storage কে database হিসেবে use করছি।
// যাকে add করবো তার id কে parameter হিসেবে নিবো

// storage এ কোন item আছে কিনা তা আমরা check করতে পারি:

// console এ গিয়ে localStorage.getItem('...') --> enter



// =============================



// previous local storage function [unorganized system]

/* 
const addToLocalStorage = id => {

    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        localStorage.setItem(id, 1);
    }
} 
*/


// =============================


// get the shopping Cart from local storage

const getStoredCart = () => {
    let shoppingCart;

    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {}
    }
    return shoppingCart;
}



// organized local storage cart

const addToLocalStorage = id => {

    let shoppingCart;

    // get the shopping Cart from local storage
    // [shopping cart টা আছে কিনা check করছি]

    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {}
    }

    // আমরা এই code গুলোর বদলে এখন getStoredCart কে call করতে পারি
    // উপরের code গুলো আমরা getStoredCart এ বসিয়েছি

    // একে call করতে পারি: getStoredCart();



    // add quantity
    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


// remove item from cart

const removeFromStorage = id => {

    // shopping cart টা আছে কিনা check করবো
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
};


// যদি shopping cart remove করতে চাই local storage বা database থেকে

const deleteLocalStorageCart = () => {
    localStorage.removeItem('shopping-cart');
}


// export
export { addToLocalStorage, removeFromStorage, deleteLocalStorageCart, getStoredCart };


// fancy export style
/* 
export { 
    addToLocalStorage, 
    removeFromStorage,
    deleteLocalStorageCart 
}; 
*/