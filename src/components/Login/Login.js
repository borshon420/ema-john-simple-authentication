import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useFirebase()
    return (
        <div className="login-form">
            <div>
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <div>----------------or-----------------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Login;