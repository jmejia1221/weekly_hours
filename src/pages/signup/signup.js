import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './signup.scss';

// COMPONENTS
import Button from '../../components/buttons/button';

class Signup extends Component {
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
                    <div className="input-signup-content">
                        <label>
                            <input className="input-1" placeholder="Username" />
                        </label>
                        <label>
                            <input className="input-1" placeholder="Email" />
                        </label>
                        <label>
                            <input className="input-1" placeholder="Password" />
                        </label>
                    </div>
                    <div className="text--center">
                        <Button>Sign Up</Button>
                        <div>
                            <Link to="/login">Sign In</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Signup;