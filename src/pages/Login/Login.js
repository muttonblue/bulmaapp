import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return (
            <section class="section has-background-info">
                <div class="container">
                    <h1 class="title">
                        Login 
                    </h1>
                    <p class="subtitle">
                        My first website with
                        <strong>Bulma</strong>!
                    </p>
                    <button onClick={this.handleClick}>Click Me!!</button>
                </div>
                <h1>Home</h1>
            </section>

        );
    }

    handleLogin() {
        console.log("xxx");
    }

}