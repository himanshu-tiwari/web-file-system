import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Listing from './Listing';

class Dashboard extends Component {
    state = {
        displayOptionsFor: null
    };

    toggleOptionsMenu = (e, id) => {
        if (e) {
            e.preventDefault();
        }
        if (id) {
            id = id.toLowerCase().split(" ").join("~");
        }
        this.setState({
            ...this.state,
            displayOptionsFor: id
        })
    };

    render() {
        const { displayOptionsFor } = this.state;
        return(
            <div className="dashboard" onClick={() => this.toggleOptionsMenu(null)}>
                <Sidebar />

                <div className="main">
                    <Navbar />
                    
                    <Listing
                        toggleOptionsMenu={this.toggleOptionsMenu}
                        displayOptionsFor={displayOptionsFor}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;
