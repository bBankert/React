import React, {useState,useEffect} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import './Auth.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import {updateObject,checkValidity} from '../../Shared/utility';

const Auth = props => {
    const [controls,setControls] = useState({
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        });
        const [isSignUp,setIsSignUp] = useState(true);

    useEffect(() => {
        if(!props.buildingBurger && props.authRedirect !== '/'){
            props.onSetAuthRedirectPath();
        }
    },[]);


    const inputChangedHandler = (event,controlName) => {
        const updatedControls = updateObject(controls,{
            [controlName]: updateObject(controls[controlName],{
                value: event.target.value,
                valid: checkValidity(event.target.value,controls[controlName].validation),
                touched: true,
            })
        });
        setControls(updatedControls);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(controls.email.value,controls.password.value,isSignUp);
    }

    const switchAuthModeHandler = () => {
        setIsSignUp(!isSignUp);
    }

    const formElementsArray = [];
    for(let key in controls){
        formElementsArray.push({
            id: key,
            config: controls[key]
        });
    }

    let form = formElementsArray.map(formElement => (
        <Input 
        key={formElement.id}
        elementType={formElement.config.elementType} 
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => inputChangedHandler(event,formElement.id)}/>
    ));

    if(props.loading){
        form = <Spinner/>;
    }

    const errorMessage = null;
    if(props.error){
        errorMessage = (<p>{props.error.message}</p>);
    }

    let redirect = null;
    if(props.isAuthenticated){
        redirect = <Redirect to={props.authRedirect}/>
    }

    return(
        <div className="Auth">
            {errorMessage}
            {redirect}
            <form onSubmit={submitHandler}>
                {form}
                <Button btnType="Success">Submit</Button>
            </form>
            <Button clicked={switchAuthModeHandler} btnType="Danger">Switch to {isSignUp ? 'Sign in' : 'Sign up'}</Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirect: state.auth.authRedirectPath,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,password,isSignUp) => dispatch(actions.auth(email,password,isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth);