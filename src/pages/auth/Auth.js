import React, { Component } from 'react';
import Login from "./Login";
import "./Auth.css";

class Auth extends Component {
    render() {
        return (
            <div className='auth'>
                <Login />
                <img src='' />
            </div>
        );
    }
}

export default Auth;