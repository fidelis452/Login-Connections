import React, { Component } from "react";

class Login extends Component {
    state = {
        credentials: { username: '', password: '' }
    }
    login = event => {
        console.log(this.state.credentials);
        //can be done in axios
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(
            data => data.json()
            )
        .then(
            data => {
                console.log(data.token);
            }
        ).catch(error => console.error(error))
    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }
    render() {
        return (
            <div className="App">
                <h2>THA PORTAL</h2>
                <label>
                    Username:
                    <input type='text' name="username" 
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}
                    />
                </label>
                <label>
                    Password:
                    <input type='password' name="password"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}
                    />
                </label>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;
