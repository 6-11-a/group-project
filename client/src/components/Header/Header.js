import React, { Component } from 'react';

import ResponsiveMenu from 'react-responsive-navbar';
import Icon from 'react-icons-kit';
import {ic_dehaze} from 'react-icons-kit/md/ic_dehaze';
import {ic_close} from 'react-icons-kit/md/ic_close';
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="outter-logo">Ecomm</h1>
            <ResponsiveMenu
                menuOpenButton={<Icon size={26} icon={ic_dehaze} />}
                menuCloseButton={<Icon size={26} icon={ic_close} />}
                changeMenuOn="500px"
                largeMenuClassName="large-menu"
                smallMenuClassName="small-menu"
                menu={
                    <div className="header">
                        <div className="logo">
                            <h1>Ecomm</h1>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/cart">Cart</a></li>
                                <li><a href="/login">Login/Sign up</a></li>
                            </ul>
                        </nav>
                    </div> 
                }  
            />
            </div>
        )
    }
}
