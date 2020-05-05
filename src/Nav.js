import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Nav extends Component{
    render(){
        return(
            <Router>
                <div className="navigation">
                    <div className="container">
                        <div className="navBar">
                                <h1>Logo-designer</h1>
                            </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Nav;