import React from 'react'
// The i tag below is where you place the icon the other classNames define properties
const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </a>

            </div>
        </div>
    );
};

export default Dashboard;
