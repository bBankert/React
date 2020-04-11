import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route,Redirect} from 'react-router-dom';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const Checkout = props => {


    const checkoutCancelledHandler = () =>{
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    }



    let summary = <Redirect to="/"/>;
    
    if(props.ingred){
        const purchaseRedirect = props.purchased ?  <Redirect to="/"/> : null;
        summary = (
        <div>
            {purchaseRedirect}
            <CheckoutSummary 
            ingredients={props.ingred}
            checkoutCancelled={checkoutCancelledHandler}
            checkoutContinued={checkoutContinuedHandler}/>
            <Route 
                path={props.match.path + '/contact-data'} 
                component={ContactData}/>
        </div>
        )
    }
    return summary;
}

const mapStateToProps = state => {
    return {
        ingred: state.burgerBuilder.ingredients,
        purchased: state.order.purchased,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cancelOrder: () => dispatch(actions.setAuthRedirectPath('/')),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Checkout);