import React from 'react';
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import Home  from "./Home"
import {NotFound} from "../pages"
 
export default() => {
    return (
        <Switch>
            <Route exact path="/bulmaapp/admin" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    );
}
