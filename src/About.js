import React, { Component } from 'react';
import './style.css';
import ReactDom from 'react-dom';
class About extends Component{
    render(){
        return(
            <div className="about">
                <div className="container">
                    <div name="" className="inner">
                        <h3>About us</h3>
                        <hr/>
                        <h5>I am pawan with my friends to provide you a better service in Logo designing. We develop Logos for different local brands from 2018. I also in designing field from 2015 and designing logos from 2017. We design more logos for more than 100 clients in local area as well as in remote location.</h5>
                    </div>
                    <div className="contact">
                        <h3>Contact</h3>
                        <hr/>
                        <h5>Email: akash9321singh@gmail.com, Mobile: 9321585085</h5>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;