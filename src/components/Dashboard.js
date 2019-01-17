import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Listing from './Listing';
import InfoModal from './InfoModal';

class Dashboard extends Component {
    state = {
        displayOptionsFor: null,
        displayInfoModal: false
    };

    toggleState = (field, options) => {
        this.setState({
            ...this.state,
            [field]: !this.state[field],
            displayOptionsFor: null
        });
    };

    changeState = (field, value) => {
        if (field === "displayOptionsFor" && typeof(value) === "string") {
            this.setState({
                ...this.state,
                [field]: value.toLowerCase().split(" ").join("~")
            });
        } else {
            this.setState({
                ...this.state,
                [field]: value,
                displayOptionsFor: null
            });
        }
    }

    render() {
        const { displayOptionsFor, displayInfoModal } = this.state;
        return(
            <div className="dashboard">
                <Sidebar />

                <div className="main">
                    <Navbar />
                    
                    <Listing
                        toggleOptionsMenu={(e, id) => {
                            e.preventDefault();
                            this.changeState("displayOptionsFor", id)
                        }}
                        toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        displayOptionsFor={displayOptionsFor}
                    />

                    { displayInfoModal && <InfoModal currentTarget={displayOptionsFor} toggleInfoModal={() => this.toggleState("displayInfoModal")} /> }
                </div>
            </div>
        );
    }
}

export default Dashboard;
