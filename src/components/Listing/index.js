import React from 'react';
import './index.scss';
import file from '../../assets/icons/file.png';
import folder from '../../assets/icons/folder.png';
import create from '../../assets/icons/create.png';
import OptionsMenu from '../OptionsMenu';

const Listing = (props) => {
    const {
        displayOptions,
        displayOptionsFor,
        toggleOptionsMenu,
        toggleInfoModal,
        toggleCreateNewModal,
        contents,
        peekInFolder,
        deleteFile,
        deleteFolder,
        searchTerm
    } = props;

    const createList = (fileFolder) => {
        let { id, name, extension, type } = fileFolder;
        type = typeof(type) === "string" && type.length > 0 ? type : '';

        if (type === "file") {
            return(
                <div
                    className="file-folder-div file-div"
                    data-extension={extension}
                    onContextMenu={(e) => toggleOptionsMenu(e, id)}
                    key={id}
                    id={id}
                >
                    <img src={file} alt="file-icon" />
                    <p>{name}</p>
                    {
                        displayOptions &&
                        displayOptionsFor===id &&
                        <OptionsMenu
                            toggleInfoModal={toggleInfoModal}
                            peekInFolder={() => peekInFolder(id)}
                            toggleOptionsMenu={toggleOptionsMenu}
                            openOptionAvailable={false}
                            deleteFileFolder={() => deleteFile(id)}
                        />
                    }
                </div>
            );
        }

        if (type === "folder") {
            return(
                <div
                    className="file-folder-div"
                    onContextMenu={(e) => toggleOptionsMenu(e, id)}
                    onDoubleClick={(e) => peekInFolder(id)}
                    key={id}
                    id={id}
                >
                    <img src={folder} alt="file-icon" />
                    <p>{name}</p>
                    {
                        displayOptions &&
                        displayOptionsFor===id &&
                        <OptionsMenu
                            toggleInfoModal={toggleInfoModal} 
                            peekInFolder={() => peekInFolder(id)}
                            toggleOptionsMenu={toggleOptionsMenu}
                            openOptionAvailable={true}
                            deleteFileFolder={() => deleteFolder(id)}
                        />
                    }
                </div>
            );
        }

        return '';
    };
    const contentList = contents.map(fileFolder => {
        if (typeof(searchTerm) === "string" && searchTerm.length > 0) {
            if (fileFolder.name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
                return createList(fileFolder);
            } else {
                return '';
            }
        } else {
            return createList(fileFolder);
        }
    });

    return(
        <div className="listing">
            {
                (typeof(searchTerm) === "string" && searchTerm.length > 0) &&
                <p className="search-results">Search Results</p>
            }

            { contentList }

            {
                (typeof(searchTerm) === "string" && searchTerm.length > 0) ||
                <div className="file-folder-div create-div">
                    <img src={create} alt="file-icon" onClick={toggleCreateNewModal} />
                </div>
            }
        </div>
    );
};

export default Listing;