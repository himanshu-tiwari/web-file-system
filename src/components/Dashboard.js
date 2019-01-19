import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Listing from './Listing';
import InfoModal from './InfoModal';
import CreateNewModal from './CreateNewModal';
import { connect } from 'react-redux';
import { createFolder, changeFolder } from '../store/actions/folderActions';

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

        let { contents, path, list, createFolder, structure, changeFolder } = this.props;
        contents = (
            typeof(contents) === "object" &&
            contents instanceof Array &&
            contents.length > 0
        ) ? contents.map(index => structure[index]) : {};
        path = typeof(path) === "string" ? path : '';
        list = typeof(list) === "object" && Object.keys(list).length > 0 ? list : {};
        const parents = path.trim().split('/').filter(parent => typeof(parent) === "string" && parent.length);

        // console.log(this.state);

        return(
            <div className="dashboard">
                <Sidebar list={list} disabled={displayInfoModal || displayCreateNewModal} />

                <div className="main">
                    <Navbar
                        structure={structure}
                        path={path}
                        folderUp={() => {
                            const id = parents[parents.length -1];
                            typeof(id) === "string" && id.length > 0 ? changeFolder(id) : changeFolder("root");
                        }}
                        parents={parents}
                    />
                    
                    <Listing
                        toggleOptionsMenu={(e, id) => {
                            e.preventDefault();
                            this.changeState("displayOptionsFor", id);
                        }}
                        displayOptions={displayOptions}
                        displayOptionsFor={displayOptionsFor}
                        toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        toggleCreateNewModal={() => this.toggleState("displayCreateNewModal")}
                        contents={Object.values(contents)}
                    />

                    { 
                        displayInfoModal
                        &&
                        <InfoModal
                            currentTarget={contents.filter(fileFolder => {
                                return fileFolder.name.toLowerCase().split(" ").join("~") === displayOptionsFor;
                            })}
                            toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        />
                    }

                    { 
                        displayCreateNewModal
                        &&
                        <CreateNewModal
                            toggleCreateNewModal={() => this.toggleState("displayCreateNewModal")}
                            createFolder={createFolder}
                        />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { structure, currentFolder } = state.folder;
    const folderContents = typeof(currentFolder) === "string" && currentFolder.length > 0 ? structure[currentFolder] : structure.root;
    const { contents, parents, path } = folderContents;

    return {
        structure,
        contents,
        parents,
        path,
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createFolder: (folder) => dispatch(createFolder(folder)),
        changeFolder: (id) => dispatch(changeFolder(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
