import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import './form.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/dashboard');
    };

    const navigate = useNavigate();
    const toRegister = () => {
        navigate('/register');
    };

    return (
        <div className="form-container">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className='form-element'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder="youremail@gmail.com"
                        autoComplete='off'
                    />
                </div>
                <div className='form-element'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        id="password"
                        placeholder="********"
                    />
                </div>

                <button
                    className="submit-btn"
                    type="Submit"
                >
                    Login
                </button>
            </form>
            <button className="link-btn" onClick={toRegister}>
                Dont have Credentials? Register here.
            </button>
        </div>
    );
};

export default Login;
