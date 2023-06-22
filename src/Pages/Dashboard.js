import React, { useState } from 'react';
import DashboardLeft from '../Components/DashboardLeft';
import DashboardRight from '../Components/DashbaordRight';
import Visualisation from './Visualisation';
import Scheduler from './Scheduler';
import MasterData from './MasterData'

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState('visualisation'); // Initial page is 'visualisation'

    // Function to handle link clicks and update the current page
    const handleLinkClick = (page) => {
        setCurrentPage(page);
    };

    // Render the content based on the current page
    const renderContent = () => {
        switch (currentPage) {
            case 'visualisation':
                return <Visualisation />;
            case 'scheduler':
                return <Scheduler />;
            case 'masterData':
                return <MasterData />;
            default:
                return <Visualisation />;
        }
    };
    return (
        <>
            <div className="dashboard-container">
                <DashboardLeft onLinkClick={handleLinkClick} />
                <DashboardRight>{renderContent()}</DashboardRight>
            </div>
        </>
    );
};

export default Dashboard;
