import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Listing from './Listing';
import InfoModal from './InfoModal';
import CreateNewModal from './CreateNewModal';
import { connect } from 'react-redux';
import { createFolder, changeFolder } from '../store/actions/folderActions';
import { createFile } from '../store/actions/fileActions';
import { stringify } from 'querystring';

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
            [field]: !this.state[field]
        });
    };

    changeState = (field, value) => {
        this.setState({
            ...this.state,
            [field]: value
        }, () => {
            if (field === "displayOptionsFor" && typeof(value) === "string") {
                this.setState({
                    ...this.state,
                    displayOptions: true
                });
            }
        });
    }

    peekInFolder = (id) => {
        const { changeFolder } = this.props;
        typeof(id) === "string" && id.length > 0 ? changeFolder(id) : changeFolder("root");
        this.setState({
            ...this.state,
            displayOptions: false
        });
    }

    render() {
        const { displayOptions, displayOptionsFor, displayInfoModal, displayCreateNewModal } = this.state;

        let { contents, path, createFolder, structure, currentFolder, createFile } = this.props;
        contents = (
            typeof(contents) === "object" &&
            contents instanceof Array &&
            contents.length > 0
        ) ? contents.map(index => structure[index]) : {};
        path = typeof(path) === "string" ? path : '';

        console.log(this.props);
        
        const parents = path
            .trim()
            .split('/')
            .filter(parent => typeof(parent) === "string" && parent.length);

        return(
            <div className="dashboard">
                <Sidebar
                    structure={structure}
                    disabled={displayInfoModal || displayCreateNewModal}
                    peekInFolder={(id) => this.peekInFolder(id)}
                    currentFolder={currentFolder}
                />

                <div className="main">
                    <Navbar
                        structure={structure}
                        folderUp={() => {
                            const id = parents[parents.length -1];
                            this.peekInFolder(id);
                        }}
                        parents={parents}
                        peekInFolder={(id) => this.peekInFolder(id)}
                        currentFolder={currentFolder}
                    />
                    
                    <Listing
                        toggleOptionsMenu={(e, id) => {
                            e.preventDefault();
                            (
                                typeof(id) === "string" &&
                                stringify.length
                            ) ? this.changeState("displayOptionsFor", id)
                            : this.toggleState("displayOptions");
                        }}
                        displayOptions={displayOptions}
                        displayOptionsFor={displayOptionsFor}
                        toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        toggleCreateNewModal={() => this.toggleState("displayCreateNewModal")}
                        contents={Object.values(contents)}
                        peekInFolder={(id) => this.peekInFolder(id)}
                    />

                    { 
                        displayInfoModal
                        &&
                        <InfoModal
                            currentTarget={contents.filter(fileFolder => {
                                return fileFolder.id === displayOptionsFor;
                            })[0]}
                            toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        />
                    }

                    { 
                        displayCreateNewModal
                        &&
                        <CreateNewModal
                            toggleCreateNewModal={() => this.toggleState("displayCreateNewModal")}
                            createFolder={createFolder}
                            path={`${path}${currentFolder}/`}
                            createFile={createFile}
                        />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { structure, currentFolder } = state.folder;
    const folderData = (
        typeof(currentFolder) === "string" &&
        currentFolder.length > 0 &&
        structure.hasOwnProperty(currentFolder)
    ) ? structure[currentFolder] : structure.root;
    const { contents, parents, path } = folderData;

    return {
        structure,
        contents,
        parents,
        path,
        currentFolder
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createFolder: (folder) => dispatch(createFolder(folder)),
        changeFolder: (id) => dispatch(changeFolder(id)),
        createFile: (file) => dispatch(createFile(file))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
