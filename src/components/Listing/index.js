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
        peekInFolder
    } = props;

    const contentList = contents.map(fileFolder => {
        let { id, name, extension, type } = fileFolder;
        type = typeof(type) === "string" && type.length > 0 ? type : '';
        
        if (type === "file") {
            return(
                <div
                    className="file-folder-div file-div"
                    data-extension={extension}
                    onContextMenu={(e) => toggleOptionsMenu(e, id)}
                    key={name}
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
                    key={name}
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
                        />
                    }
                </div>
            );
        }

        return '';
    });

    return(
        <div className="listing">
            { contentList }
            
            <div className="file-folder-div create-div">
                <img src={create} alt="file-icon" onClick={toggleCreateNewModal} />
            </div>
        </div>
    );
};

export default Listing;