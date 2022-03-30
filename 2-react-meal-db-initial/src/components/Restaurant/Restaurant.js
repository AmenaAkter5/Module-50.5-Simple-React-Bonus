import React, { useEffect, useState } from 'react';
import { addToDatabase, getDatabase } from '../../utilities_A/Database';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Restaurant.css';

const Restaurant = () => {

    // data load state
    const [meals, setMeals] = useState([]);

    // order summary state
    const [orders, setOrders] = useState([]);

    // fetch data
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);
    /* 
        The above api link or the below method will now work for search. 
        if you want to implement search in this code. 
        1. add a input field 
        2. declare a state to keep search field text
        3. Make meal loading api to dependant on search text
        4. change the meal loading api.you will get the right api link on their website.
        5. make the meal loading api dynamic using template string. 
        6. Also, the useEffect below will not work. Because, search result might not include the meals previously added to the cart
        7. in that case, for each mealId, you have to load the meal from the api (you will find a new pai to load meal by Id) and then add them to the order state.
        ---------------  
        Read carefully, give it a try. [ Ki ache jibone]
        if  you need help, let us know in the support session
    */



    // handle add to order button click event [in meal component]

    // database এর কাজ কারবার এর আগে

    /* 
    const addToOrder = meal => {

        // order state এ meal টা কে add করবো তাই আগের arrayর element নিবো
        const newOrder = [...orders, meal];
        setOrders(newOrder);

        // database এ add করবো data, button click এ
        addToDatabase(meal.idMeal);
    } 
    */


    // database এর কাজ কারবার এর পরে 

    const addToOrder = meal => {

        // meal টা আমাদের database এর list এ আছে কিনা আগে check করবো
        // পাওয়া গেলে এর quantity 1 বাড়াবো

        let newOrder = [];

        const exists = orders.find(m => m.idMeal === meal.idMeal);
        if (exists) {
            // exist বাদে বাকিগুলোকে filter করবো
            const rest = orders.filter(m => m.idMeal !== meal.idMeal);

            // exist এর আগের quantityর সাথে 1 বাড়াবো
            exists.quantity = exists.quantity + 1;

            // new order array তে rest এবং exists কে বসিয়ে দেবো
            newOrder = [...rest, exists];
        }
        else {
            // order state এ meal টা কে add করবো তাই আগের arrayর element নিবো
            meal.quantity = 1;
            newOrder = [...orders, meal];
        }


        setOrders(newOrder);

        // database এ add করবো data, button click এ
        addToDatabase(meal.idMeal);
    }


    // database (storage) data load
    useEffect(() => {

        const storedOrder = getDatabase();
        const savedOrder = [];

        // database এ stored list এ আমাদের added id আছে কিনা তা check করছি
        for (const id in storedOrder) {
            const addedMeal = meals.find(meal => meal.idMeal === id);

            // added id কে পাওয়া গেলে savedorder array তে এই meal কে push করে দেবো

            if (addedMeal) {
                // database এ থাকা meal এর value তার quantity
                const quantity = storedOrder[id];

                // addedmeal এর new property quantity set করে দেবো
                addedMeal.quantity = quantity;

                // saved order array তে push করে দেবো added meal কে
                savedOrder.push(addedMeal);
            }
        }
        // order summary এর state এ new array টা পাঠিয়ে দেবো
        // array of object হবে এটা
        setOrders(savedOrder);

    }, [meals])

    return (
        <div className="restaurant-menu">
            <div className="meals-container">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        addToOrder={addToOrder}
                    ></Meal>)
                }
            </div>
            <div className="order-list">
                <OrderList
                    orders={orders}
                ></OrderList>
            </div>
        </div>

    );
};

export default Restaurant;