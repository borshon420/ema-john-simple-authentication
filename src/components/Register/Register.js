import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h1>Register: Create Account</h1>
                <form>
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="password" placeholder="Your password" />
                    <br />
                    <input type="password" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>--------or---------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;