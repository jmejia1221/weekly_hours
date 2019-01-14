import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './login.scss';

// COMPONENTS
import Button from '../../components/buttons/button';

class Login extends Component {
    constructor(props) {
        super(props);
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
                        <Button>Login</Button>
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