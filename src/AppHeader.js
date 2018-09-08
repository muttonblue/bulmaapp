import React, {Component} from 'react';
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

export default class AppHeader extends Component {
    render() {
        return (
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <img src={logo} className="App-logo" style={{width: 50, height:50}} alt="logo"/>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                            <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
                            <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
                            <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
                            <NavLink to="/admin" activeClassName="is-active" className="navbar-item">Admin</NavLink>
                            <NavLink to="/login" activeClassName="is-active" className="navbar-item">Login</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
