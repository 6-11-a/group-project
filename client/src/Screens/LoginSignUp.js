import React, { Component } from 'react';
import Header from './../components/Header/Header';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Footer from '../components/Footer/Footer';


export default class LoginSignUp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Login />
                <Signup />
                <Footer />
            </div>
        )
    }
}
