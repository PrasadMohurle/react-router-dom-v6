import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {faCheck ,faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './form.css';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Eamil:', email);
        console.log('Password:', password);
        console.log('ConfirmPassword:', confirmPassword);

        navigate('/login');

        if (username && email && password && confirmPassword) {
            navigate('/login');
        } else {
            setErrorMessage('All fields are necessary.');
            navigate('/register');
        }
    };

    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        var isLogin = sessionStorage.getItem('isLogin');
        if(isLogin){
            navigate('/dashboard')
        }
    }, [])

    return (
        <div className="form-container">
            <h1>Registeration Form</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="form">
                <div className="form-element">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => {setUsername(e.target.value); setErrorMessage('')}}
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
                        onChange={(e) => {setEmail(e.target.value); setErrorMessage('')}}
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
                        onChange={(e) => {setPassword(e.target.value); setErrorMessage('')}}
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value); setErrorMessage('')}}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Password"
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
