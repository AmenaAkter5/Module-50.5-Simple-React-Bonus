
let object = {};

const setItem = item => {
    const keepAndParseData = JSON.parse(localStorage.getItem('shopping-cart'));
    if (keepAndParseData) {
        object = keepAndParseData;
    }
    if (item in object) {
        object[item] = object[item] + 1;
    }
    else {
        object[item] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(object));
}

// remove data from localStorage

const removeItem = item => {
    const keepAndParseData = JSON.parse(localStorage.getItem('shopping-cart'))
    if (keepAndParseData) {
        delete keepAndParseData[item];
        localStorage.setItem('shopping-cart', JSON.stringify(keepAndParseData));
    }
}