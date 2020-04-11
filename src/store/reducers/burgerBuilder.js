import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../Shared/utility';


const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state,action) => {
    const updatedAddIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const updatedAddedIngredients = updateObject(state.ingredients,updatedAddIngredient);
    return updateObject(state,{
        ingredients: updatedAddedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    });
}

const removeIngredient = (state,action) => {
    const updatedRemoveIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const updatedRemovedIngredients = updateObject(state.ingredients,updatedRemoveIngredient);
    return updateObject(state,{
        ingredients: updatedRemovedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    });
}

const setIngredient = (state,action) => {
    return updateObject(state,{
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        building: false
    });
}

const fetchIngredientsFailed = (state,action) => {
    return updateObject(state,{
        error: true
    });
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state,action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state,action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredient(state,action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state,action);
        default:
            return state;
    }
};

export default reducer;