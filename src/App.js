import React, {Component} from 'react';
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import AppHeader from "./AppHeader";
import AppRoutes from "./AppRoutes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader/>
                <AppRoutes />
            </div>
        );
    }
}

export default App;
