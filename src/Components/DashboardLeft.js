import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const DashbaordLeft = ({ onLinkClick }) => {
    const [activeButton, setActiveButton] = useState(null);

    var role = sessionStorage.getItem('role');

    const navigate = useNavigate();
    const toLogin = () => {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('isLogin');
        navigate('/login');
    };

    useEffect(() => {
        switch (role) {
            case 'watcher':
                document.getElementById('scheduler').style.display = 'none';
                document.getElementById('masterData').style.display = 'none';
                break;
            case 'scheduler':
                document.getElementById('masterData').style.display = 'none';
                break;
            case 'admin':
                break;
            default:
                document.getElementById('scheduler').style.display = 'none';
                document.getElementById('masterData').style.display = 'none';
                break;
        }
    }, [role]);

    return (
        <div className="dashboard-left">
            <img
                className="HPCL-logo"
                src="./images/HPCL_Logo.png"
                alt="HPCL Logo"
            />
            <ul className="list-items">
                <li
                    className={`dashboard-list ${ activeButton === 'Visualisation' ? 'active' : '' }`}
                    id="visualisation"
                    onClick={() => {
                        onLinkClick('visualisation');
                        setActiveButton('Visualisation');
                    }}
                >
                    Visualisation
                </li>
                <li
                    className={`dashboard-list ${ activeButton === 'Scheduler' ? 'active' : '' }`}
                    id="scheduler"
                    onClick={() => {
                        onLinkClick('scheduler');
                        setActiveButton('Scheduler');
                    }}
                >
                    Scheduler
                </li>
                <li
                    className={`dashboard-list ${ activeButton === 'MasterData' ? 'active' : '' }`}
                    id="masterData"
                    onClick={() => {
                        onLinkClick('masterData');
                        setActiveButton('MasterData');
                    }}
                >
                    MasterData
                </li>
            </ul>
            <div className="user-control">
                <img
                    className="person-image"
                    src="./images/person2.jpg"
                    alt="person"
                />
                <button className="logout-btn" onClick={toLogin}>
                    Logout.
                </button>
            </div>
        </div>
    );
};

export default DashbaordLeft;
