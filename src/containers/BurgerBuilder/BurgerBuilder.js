import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';



class BurgerBuilder extends Component{
    state = {
        currentlyPurchasing: false,
        loading: false
    }

    componentDidMount(){
        // axios.get('https://first-react-project-88d5a.firebaseio.com/ingredients.json')
        // .then(response => {
        //     this.setState({ingredients: response.data});
        // })
        // .catch(error => {});
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(ingredKey => {
               return ingredients[ingredKey]; 
            })
            .reduce((sum, el) => {
                return sum + el;
            } ,0);
        return sum > 0;
    }

    

    purchaseHanlder = () => {
        this.setState({currentlyPurchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({currentlyPurchasing: false});
    }

    purchaseContinueHanlder = () => {
        this.props.history.push('/checkout');
    }

    render(){
        const disabledInfo = {
            ...this.props.ingred
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;

        let burger = <Spinner/>;
        if(this.props.ingred){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingred}/>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ingred)}
                        price={this.props.price}
                        ordered={this.purchaseHanlder}/>
                </Aux>
            );

            orderSummary = <OrderSummary 
                ingredients = {this.props.ingred}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHanlder}
                price={this.props.price}/>;
        }
        if(this.state.loading){
            orderSummary = <Spinner />;
        }
        return(
            <Aux>
                <Modal show={this.state.currentlyPurchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
               {burger}
            </Aux>
        );
    }

}
const mapStateToProps = state => {
    return {
        ingred : state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: name}),
        onIngredientRemoved: (name) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: name})
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder,axios));