import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    };

    // const toRegister = () => {
    //     navigate('/register');
    // };

    return (
        <>
            <div className="home-container">
                <h1>Welcome !</h1>
                <p>You are on Home Page.</p>

                <button className="link-btn login-btn" onClick={toLogin}>
                    Login
                </button>

                {/* <button className="link-btn register-btn" onClick={toRegister}>
                    Register here.
                </button> */}
            </div>
        </>
    );
};

export default Home;
