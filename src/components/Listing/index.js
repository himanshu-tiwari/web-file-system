import React from 'react';
import './index.scss';
import file from '../../assets/icons/file.png';
import folder from '../../assets/icons/folder.png';
import create from '../../assets/icons/create.png';
import OptionsMenu from '../OptionsMenu';

const Listing = (props) => {
    const { displayOptionsFor, toggleOptionsMenu, toggleInfoModal, toggleCreateNewModal } = props;

    return(
        <div className="listing">
            <div className="file-folder-div file-div" data-extension="html" onContextMenu={(e) => toggleOptionsMenu(e, "index.html")}>
                <img src={file} alt="file-icon" />
                <p>index.html</p>
                { displayOptionsFor==="index.html".toLowerCase().split(" ").join("~") && <OptionsMenu toggleInfoModal={toggleInfoModal} /> }
            </div>

            <div className="file-folder-div file-div" data-extension="js" onContextMenu={(e) => toggleOptionsMenu(e, "index.js")}>
                <img src={file} alt="file-icon" />
                <p>index.js</p>
                { displayOptionsFor==="index.js".toLowerCase().split(" ").join("~") && <OptionsMenu toggleInfoModal={toggleInfoModal} /> }
            </div>

            <div className="file-folder-div" onContextMenu={(e) => toggleOptionsMenu(e, "Assets")}>
                <img src={folder} alt="file-icon" />
                <p>Assets</p>
                { displayOptionsFor==="Assets".toLowerCase() && <OptionsMenu toggleInfoModal={toggleInfoModal} /> }
            </div>

            <div className="file-folder-div" onContextMenu={(e) => toggleOptionsMenu(e, "Other Assets")}>
                <img src={folder} alt="file-icon" />
                <p>Other Assets</p>
                { displayOptionsFor==="Other Assets".toLowerCase().split(" ").join("~") && <OptionsMenu toggleInfoModal={toggleInfoModal} /> }
            </div>
            
            <div className="file-folder-div create-div">
                <img src={create} alt="file-icon" onClick={toggleCreateNewModal} />
            </div>
        </div>
    );
};

export default Listing;