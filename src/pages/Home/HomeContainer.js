import React, {Component} from 'react';
// import View from "./HomeView";
import {HomeAction} from "../../actions"

export default class HomeContainer extends Component {

    render() {
        return (
            <section class="section has-background-info">
                <div class="container">
                    <h1 class="title">
                        Hello World
                    </h1>
                    <p class="subtitle">
                        My first website with
                        <strong>Bulma</strong>!
                    </p>
                </div>
                <h1>Home</h1>
                <div class="columns">
                    <div class="column">
                        <a class="button">
                            Button
                        </a>
                    </div>
                    <div class="column">
                        <a class="button is-primary">
                            Primary button
                        </a>
                    </div>
                    <div class="column">
                        <a class="button is-large">
                            Large button
                        </a>
                    </div>
                    <div class="column">
                        <a class="button is-loading">
                            Loading button
                        </a>
                    </div>
                    <div class="column">
                        <button onClick={this.handleClick}>Click Me!!</button>
                    </div>
                </div>

            </section>

        );
    }

    handleClick() {
        console.log("xxx");

    }

}