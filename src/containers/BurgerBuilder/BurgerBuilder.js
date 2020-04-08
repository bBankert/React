import React, {Component} from 'react';
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



export class BurgerBuilder extends Component{
    state = {
        currentlyPurchasing: false,
    }

    componentDidMount(){
        this.props.onInitIngredients(); 
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

    

    purchaseHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({currentlyPurchasing: true});
        }
        else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState({currentlyPurchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
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

        let burger = this.props.error ? <p>Can't load ingredients</p> : <Spinner/>;
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
                        ordered={this.purchaseHandler}
                        isAuth={this.props.isAuthenticated}/>
                </Aux>
            );

            orderSummary = <OrderSummary 
                ingredients = {this.props.ingred}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}/>;
        }
        // if(this.state.loading){
        //     orderSummary = <Spinner />;
        // }
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