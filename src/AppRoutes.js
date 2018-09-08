import React from 'react';
import {Route, Switch, Link, NavLink, Redirect} from 'react-router-dom'
import {Home, About, Login, NotFound } from "./pages"
import AdminApp from "./admin"

const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

export default() => {
    return (
        <Switch>
            <Route exact path="/bulmaapp" component={Home}/>
            <Route exact path="/bulmaapp/home" component={Home}/>
            <PrivateRoute path="/bulmaapp/admin" component={AdminApp}/>
            <Route path="/bulmaapp/about" component={About}/>
            <Route path="/bulmaapp/posts" component={Post}/>
            <Route path="/bulmaapp/projects" component={Project}/>
            <Route path="/login" component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const PrivateRoute = ({
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => fakeAuth.isAuthenticated
        ? (<Component {...props}/>)
        : (<Redirect
            to={{
            pathname: "/login",
            state: {
                from: props.location
            }
        }}/>)}/>
);
