import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUserData } from '../Utils/api';
import './form.css';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Eamil:', email);
        console.log('Password:', password);

        // const userData = { username, email, password, role: 'watcher' };
        // saveUserData(userData);
        navigate('/login');
    };

    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    };

    return (
        <div className="form-container">
            <h1>Registeration Form</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-element">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                        id="username"
                        placeholder="Usename"
                        autoComplete="off"
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder="youremail@gmail.com"
                        autoComplete="off"
                    />
                </div>
                <div className="form-element">
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

                <button className="submit-btn" type="Submit">
                    Register
                </button>
            </form>
            <button className="link-btn" onClick={toLogin}>
                Already have account? Login here.
            </button>
        </div>
    );
};

export default Register;
