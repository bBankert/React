import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredKey => {
        return <li key={ingredKey}><span style={{textTransform:'capitalize'}}>{ingredKey}</span>: {props.ingredients[ingredKey]}</li>;
    });
    return(
        <Aux>
            <h3>Order Summary</h3>
            <p>Burger Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total: {props.price.toFixed(2)}</strong></p>
            <p>Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;