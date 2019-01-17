import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Listing from './Listing';
import InfoModal from './InfoModal';
import CreateNewModal from './CreateNewModal';

class Dashboard extends Component {
    state = {
        displayOptionsFor: null,
        displayInfoModal: false,
        displayCreateNewModal: false
    };

    toggleState = (field) => {
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
        const { displayOptionsFor, displayInfoModal, displayCreateNewModal } = this.state;
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
                        displayOptionsFor={displayOptionsFor}
                        toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        toggleCreateNewModal={() => this.toggleState("displayCreateNewModal")}
                    />

                    { 
                        displayInfoModal
                        &&
                        <InfoModal
                            currentTarget={displayOptionsFor}
                            toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        />
                    }

                    { 
                        displayCreateNewModal
                        &&
                        <CreateNewModal toggleCreateNewModal={() => this.toggleState("displayCreateNewModal")} />
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard;
