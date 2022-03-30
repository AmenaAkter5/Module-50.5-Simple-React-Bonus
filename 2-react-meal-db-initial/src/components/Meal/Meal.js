import React from 'react';
import './Meal.css';

const Meal = (props) => {

    const { meal, addToOrder } = props
    const { strMeal, strInstructions, strMealThumb } = meal;

    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={() => addToOrder(meal)}>Add this Food</button>
        </div>
    );
};

export default Meal;