import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

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
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHanlder}/>
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

export default layout;