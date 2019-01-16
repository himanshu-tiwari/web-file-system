import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard">
                <Sidebar />

                <div className="main">
                    <Navbar />
                </div>
            </div>
        );
    }
}

export default Dashboard;
