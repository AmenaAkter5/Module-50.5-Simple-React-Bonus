const add = (first, second) => {
    return first + second;
}


const multiply = (first, second) => {
    return first * second;
}

const substract = (first, second) => {
    return first - second;
}

const divide = (first, second) => {
    return first / second;
}




// array reduce

const numbers = [20, 24, 235, 65, 89];

// array sum process [for loop]
let sum = 0;
for (let i = 0; i >= numbers.length; i++) {
    sum = sum + numbers[i];
}

// reduce

const sumReducer = (previous, current) => previous + current;
const total = numbers.reduce(sumReducer, 0);


// array of object : reduce

const items = [
    { id: 1, name: 'Alta', price: 100 },
    { id: 2, name: 'Lipstick', price: 200 },
    { id: 3, name: 'Make up', price: 300 },
    { id: 4, name: 'Nail polish', price: 400 },
    { id: 5, name: 'Eye Shadow', price: 500 }
];

const itemsSumReducer = (previous, current) => previous + current.price;
const itemsTotal = items.reduce(itemsSumReducer, 0);


// এবার আমরা Cosmetics এর total price টা বের করে ফেলবো

const getTotalPrice = cosmetics => {
    const reducer = (previous, current) => previous + current.price;
    const total = cosmetics.reduce(reducer, 0);
    return total;
}


// default export
// export default add;


// একাধিক export
// export { add, multiply, substract, divide, getTotalPrice };

// shortcut name export system [shorcut name ই import করবে অন্য file]
export { add, multiply, substract, divide, getTotalPrice as getTotal };


