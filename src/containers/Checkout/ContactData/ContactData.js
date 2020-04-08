import React,{ Component } from "react";
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import {updateObject,checkValidity} from '../../../Shared/utility';

class ContactData extends Component{
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {     
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zip: {    
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code',
                    pattern: '[0-9]{5}'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'someone@example.com'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'overnight',displayValue: 'Overnight'},
                        {value: 'standard',displayValue: 'Standard'}
                    ]
                },
                value: 'overnight',
                valid: true,
                validation: {}
            }
        },
        loading: false,
        formIsValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let formElement in this.state.orderForm){
            formData[formElement] = this.state.orderForm[formElement].value;
        }
        const order = {
            ingredients: this.props.ingred,
            price: this.props.price,
            orderData: formData,
            UID: this.props.UID
        };

        this.props.onOrderBurger(order,this.props.token);
        
    }


    inputChangedHandler = (event,identifier) => {
        const updatedElement = updateObject(this.state.orderForm[identifier],{
            value: event.target.value,
            valid: checkValidity(event.target.value,this.state.orderForm[identifier].validation),
            touched: true
        })
        const updatedForm = updateObject(this.state.orderForm,{
            [identifier]: updatedElement
        });
        let formIsValid = true;
        for(let inputIdentifier in updatedForm){
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedForm,formIsValid: formIsValid});
    }


    render(){
        const formElement = [];
        for(let key in this.state.orderForm){
            formElement.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = null;
        if(this.props.loading){
            form = <Spinner />;
        }
        else{
            form = (
                <form onSubmit={this.orderHandler}>
                    {formElement.map(formElement => (
                        <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event,formElement.id)}/>
                    ))}
                    <Button btnType="Success" disabled={!this.state.formIsValid}>Submit</Button>
                </form>
            );
        }
        return(
            <div className="ContactData">
                <h4>Enter your contact info</h4>
                    {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingred: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        UID: state.auth.UID
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (order,token) => dispatch(actions.purchaseBurger(order,token))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));