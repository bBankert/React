import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import {connect} from 'react-redux';

class layout extends Component{
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHanlder = () => {
        this.setState((state) => {
            return {showSideDrawer: !this.state.showSideDrawer}
        });
    }


    render() {
        return (
            <Aux>
                <Toolbar 
                isAuth={this.props.isAuthenticated}
                drawerToggleClicked={this.sideDrawerToggleHanlder}/>
                <SideDrawer 
                closed={this.sideDrawerClosedHandler}
                open={this.state.showSideDrawer}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);