import React, { useState } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import {connect} from 'react-redux';

const Layout = props => {
    const [isVisible,setSideDrawerVisible] = useState(false);
    const sideDrawerClosedHandler = () => {
        setSideDrawerVisible(false);
    }

    const sideDrawerToggleHanlder = () => {
        setSideDrawerVisible(!isVisible);
    }

    return (
        <Aux>
            <Toolbar 
            isAuth={props.isAuthenticated}
            drawerToggleClicked={sideDrawerToggleHanlder}/>
            <SideDrawer 
            closed={sideDrawerClosedHandler}
            open={isVisible}/>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);