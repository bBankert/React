import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route,Redirect} from 'react-router-dom';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends Component{


    checkoutCancelledHandler = () =>{
        //this.props.cancelOrder();
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }



    render(){
        let summary = <Redirect to="/"/>;
        
        if(this.props.ingred){
            const purchaseRedirect = this.props.purchased ?  <Redirect to="/"/> : null;
            summary = (
            <div>
                {purchaseRedirect}
                <CheckoutSummary 
                ingredients={this.props.ingred}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}/>
            </div>
            )
        }
        return summary;
    }
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