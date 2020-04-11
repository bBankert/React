import React, {useState,useEffect} from 'react';
import axios from '../../axios-orders';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';



export const BurgerBuilder = props =>{

    const [currentlyPurchasing,setCurrentlyPurchasing] = useState(false);

    useEffect(() => {
        props.onInitIngredients();
    },[]);


    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredKey => {
               return ingredients[ingredKey]; 
            })
            .reduce((sum, el) => {
                return sum + el;
            } ,0);
        return sum > 0;
    }

    

    const purchaseHandler = () => {
        if(props.isAuthenticated){
            setCurrentlyPurchasing(true);
        }
        else{
            props.onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
    }

    const purchaseCancelHandler = () => {
        setCurrentlyPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        props.onInitPurchase();
        props.history.push('/checkout');
    }

    const disabledInfo = {
        ...props.ingred
    };
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null;

    let burger = props.error ? <p>Can't load ingredients</p> : <Spinner/>;
    if(props.ingred){
        burger = (
            <Aux>
                <Burger ingredients={props.ingred}/>
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={updatePurchaseState(props.ingred)}
                    price={props.price}
                    ordered={purchaseHandler}
                    isAuth={props.isAuthenticated}/>
            </Aux>
        );

        orderSummary = <OrderSummary 
            ingredients = {props.ingred}
            purchaseCancelled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            price={props.price}/>;
    }

    return(
        <Aux>
            <Modal show={currentlyPurchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
}
const mapStateToProps = state => {
    return {
        ingred : state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null,
        redirectPath: state.auth.authRedirectPath
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch(actions.addIngredient(name)),
        onIngredientRemoved: (name) => dispatch(actions.removeIngredient(name)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder,axios));