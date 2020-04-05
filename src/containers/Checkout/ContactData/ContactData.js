import React,{ Component } from "react";
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import {connect} from 'react-redux';

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
            orderData: formData
            
        };
        axios.post('/orders.json',order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading: false});
        });
    }


    inputChangedHandler = (event,identifier) => {
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedElement = {
            ...updatedForm[identifier]
        };
        updatedElement.value = event.target.value;
        updatedElement.valid = this.checkValidity(updatedElement.value,updatedElement.validation);
        updatedElement.touched = true;
        updatedForm[identifier]  = updatedElement;
        let formIsValid = true;
        for(let inputIdentifier in updatedForm){
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedForm,formIsValid: formIsValid});
    }

    checkValidity(value,rule){
        let isValid = true;
        if(!rule){
            return true;
        }
        if(rule.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rule.minLength){
            isValid = value.length >= rule.minLength && isValid;
        }
        if(rule.maxLength){
            isValid = value.length <= rule.maxLength && isValid;
        }
        return isValid;
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
        if(this.state.loading){
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
        ingred: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);