import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Listing from './Listing';

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard">
                <Sidebar />

                <div className="main">
                    <Navbar />
                    <Listing />
                </div>
            </div>
        );
    }
}

export default Dashboard;
