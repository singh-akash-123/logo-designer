import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Gallery from './Gallery';
import './style.css';

class LogoDisplay extends Component{
    render(props){
        return(
            <div className="logoStyle">
                <a href={this.props.src}>
                    <div className="logoImg">
                        <img src={this.props.src} alt={this.props.name} />
                    </div>
                    <h4>{this.props.name}</h4>
                </a>
                
            </div>
        );
    }
}
export default LogoDisplay;