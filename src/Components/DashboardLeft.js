import React from 'react';
import '../App.css';


const DashbaordLeft = ({ onLinkClick }) => {
    return (
        <div className="dashboard-left">
            <img className='HPCL-logo' src="./images/HPCL_Logo.png" alt="HPCL Logo"/>
            <ul className='list-items'>
                <li className='dashboard-list' onClick={() => onLinkClick('visualisation')}>Visualisation</li>
                <li className='dashboard-list' onClick={() => onLinkClick('scheduler')}>Scheduler</li>
                <li className='dashboard-list' onClick={() => onLinkClick('masterData')}>MasterData</li>
            </ul>
            <div className='user-image'>
                <img className='person-image' src="./images/person.jpg" alt="person" />
            </div>
        </div>
    );
};

export default DashbaordLeft;

