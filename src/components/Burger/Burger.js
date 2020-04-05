
import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredKey => {
            return [...Array(props.ingredients[ingredKey])].map((_,i) => {
                return <BurgerIngredient key={ingredKey + i} type={ingredKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>MMM.... Bread sandwich....</p>;
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;