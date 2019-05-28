import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import { HTTP } from '../../common';

// CSS
import './login.scss';

// COMPONENTS
import Button from '../../components/buttons/button';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(HTTP)
        // this.loginPost = this.loginPost.bind(this);
    }

    loginPost() {
        HTTP.post('api-token-auth/', {
            username: 'johnmejia',
            password: '12345678'
        }).then(response => {
            console.log(response)
            let token = response.data['token']
            localStorage.token = token
            // this.$store.commit('setToken', { token: token })
            history.pushState(null, '', '/');
            location.reload()
            // this.$router.push('/home')
            // history.push('/')
        })
    }

    render() {
        return (
            <section className="vh-center-box">
                <div className="login-box">
                    <div className="text--center">
                        <h1 className="home-title">Weekly Hours</h1>
                    </div>
                    <div className="input-login-content">
                        <label>
                            <input className="input-1" placeholder="Username" />
                        </label>
                        <label>
                            <input className="input-1" placeholder="Password" />
                        </label>
                    </div>
                    <div className="text--center">
                        <Button onClick={this.loginPost}>Login</Button>
                        <div>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;