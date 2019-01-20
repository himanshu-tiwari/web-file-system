import React, { Component } from 'react';
import './Dashboard.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Listing from './Listing';
import InfoModal from './InfoModal';
import CreateNewModal from './CreateNewModal';
import { connect } from 'react-redux';
import { createFolder, changeFolder, deleteFolder } from '../store/actions/folderActions';
import { createFile, deleteFile } from '../store/actions/fileActions';

class Dashboard extends Component {
    state = {
        displayOptionsFor: null,
        displayOptions: false,
        displayInfoModal: false,
        displayCreateNewModal: false,
        searchTerm: ''
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
            displayOptions: false,
            searchTerm: ''
        });
    }

    render() {
        const {
            displayOptions,
            displayOptionsFor,
            displayInfoModal,
            displayCreateNewModal,
            searchTerm
        } = this.state;

        let {
            contents,
            path,
            createFolder,
            deleteFolder,
            structure,
            currentFolder,
            createFile,
            deleteFile
        } = this.props;
        
        contents = (
            typeof(contents) === "object" &&
            contents instanceof Array &&
            contents.length > 0
        ) ? contents.map(index => structure[index]) : {};
        
        path = typeof(path) === "string" ? path : '';

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
                        searchTerm={searchTerm}
                        search={(value) => this.changeState("searchTerm", value)}
                    />
                    
                    <Listing
                        toggleOptionsMenu={(e, id) => {
                            e.preventDefault();
                            (
                                typeof(id) === "string" &&
                                id.length
                            ) ? this.changeState("displayOptionsFor", id)
                            : this.toggleState("displayOptions");
                        }}
                        displayOptions={displayOptions}
                        displayOptionsFor={displayOptionsFor}
                        toggleInfoModal={() => this.toggleState("displayInfoModal")}
                        toggleCreateNewModal={() => this.toggleState("displayCreateNewModal")}
                        contents={typeof(searchTerm) === "string" && searchTerm.length > 0 ? Object.values(structure) : Object.values(contents)}
                        peekInFolder={(id) => this.peekInFolder(id)}
                        deleteFile={(id) => deleteFile(structure[id])}
                        deleteFolder={(id) => {
                            const children = Object.values(structure)
                                .filter(fileFolder => fileFolder.path.indexOf(id) > -1)
                                .map(fileFolder => fileFolder.id);
                            const folder = {
                                ...structure[id],
                                children
                            };
                            deleteFolder(folder);
                        }}
                        searchTerm={searchTerm}
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
                            structure={structure}
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
        deleteFolder: (folder) => dispatch(deleteFolder(folder)),
        changeFolder: (id) => dispatch(changeFolder(id)),
        createFile: (file) => dispatch(createFile(file)),
        deleteFile: (file) => dispatch(deleteFile(file))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
