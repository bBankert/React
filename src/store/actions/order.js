import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id,data) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: data
    };
};


export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
}

export const purchaseBurger = (orderData,token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth='+token,orderData)
        .then(response => {
            dispatch(purchaseBurgerSuccess(response.data,orderData));
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error));
        });
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token) => {
    return dispatch => {
        axios.get('/orders.json?auth='+token)
        .then(response => {
            const data = [];
            for(let key in response.data){
                data.push({
                    ...response.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(data));
        })
        .catch(error => {
            dispatch(fetchOrdersFail(error));
        });
    }
    
}