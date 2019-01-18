import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Listing from './Listing';
import InfoModal from './InfoModal';
import CreateNewModal from './CreateNewModal';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        displayOptionsFor: null,
        displayOptions: false,
        displayInfoModal: false,
        displayCreateNewModal: false
    };

    toggleState = (field) => {
        this.setState({
            ...this.state,
            [field]: !this.state[field],
            displayOptions: false
        });
    };

    changeState = (field, value) => {
        if (field === "displayOptionsFor" && typeof(value) === "string") {
            this.setState({
                ...this.state,
                [field]: value.toLowerCase().split(" ").join("~"),
                displayOptions: true
            });
        } else {
            this.setState({
                ...this.state,
                [field]: value
            });
        }
    }

    render() {
        const { displayOptions, displayOptionsFor, displayInfoModal, displayCreateNewModal } = this.state;

        let { contents, parents, path, list } = this.props;
        contents = typeof(contents) === "object" && contents instanceof Array ? contents : []; 
        parents = typeof(parents) === "object" && Object.keys(parents).length > 0 ? parents : {};
        path = typeof(path) === "string" ? path: '';
        list = typeof(list) === "object" && Object.keys(list).length > 0 ? list : {};

        return(
            <div className="dashboard">
                <Sidebar list={list} />

                <div className="main">
                    <Navbar parents={parents} path={path} />
                    
                    <Listing
                        toggleOptionsMenu={(e, id) => {
                            e.preventDefault();
                            this.changeState("displayOptionsFor", id);
                        }}
                        displayOptions={displayOptions}
                        displayOptionsFor={displayOptionsFor}
                        toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        toggleCreateNewModal={() => this.toggleState("displayCreateNewModal")}
                        contents={contents}
                    />

                    { 
                        displayInfoModal
                        &&
                        <InfoModal
                            currentTarget={contents.filter(fileFolder => {
                                console.log(fileFolder.name.toLowerCase().split(" ").join("~"), displayOptionsFor);
                                return fileFolder.name.toLowerCase().split(" ").join("~") === displayOptionsFor;
                            })}
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

const mapStateToProps = (state) => {
    const { contents, parents, path } = state.folder;

    return {
        contents,
        parents,
        path,
        list: state.list
    };
};

export default connect(mapStateToProps)(Dashboard);
