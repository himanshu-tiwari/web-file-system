import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard">
                dashboard
                <Sidebar />
            </div>
        );
    }
}

export default Dashboard;
