import React,{ useState } from "react";
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import {updateObject,checkValidity} from '../../../Shared/utility';

const ContactData = props =>{
    const [orderForm,setOrderFrom] = useState({
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
        });
        const [formIsValid, setFormIsValid] = useState(false);

    const orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElement in orderForm){
            formData[formElement] = orderForm[formElement].value;
        }
        const order = {
            ingredients: props.ingred,
            price: props.price,
            orderData: formData,
            UID: props.UID
        };

        props.onOrderBurger(order,props.token);
        
    }


    const inputChangedHandler = (event,identifier) => {
        const updatedElement = updateObject(orderForm[identifier],{
            value: event.target.value,
            valid: checkValidity(event.target.value,orderForm[identifier].validation),
            touched: true
        })
        const updatedForm = updateObject(orderForm,{
            [identifier]: updatedElement
        });
        let formIsValid = true;
        for(let inputIdentifier in updatedForm){
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        setOrderFrom(updatedForm);
        setFormIsValid(formIsValid);
    }


    const formElement = [];
    for(let key in orderForm){
        formElement.push({
            id: key,
            config: orderForm[key]
        });
    }
    let form = null;
    if(props.loading){
        form = <Spinner />;
    }
    else{
        form = (
            <form onSubmit={orderHandler}>
                {formElement.map(formElement => (
                    <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event,formElement.id)}/>
                ))}
                <Button btnType="Success" disabled={!formIsValid}>Submit</Button>
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