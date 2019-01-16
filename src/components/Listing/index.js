import React from 'react';
import './index.scss';
import file from '../../assets/icons/file.png';
import folder from '../../assets/icons/folder.png';
import create from '../../assets/icons/create.png';

const Listing = (props) => {
    return(
        <div className="listing">
            <div className="file-folder-div file-div">
                <img src={file} alt="file-icon" />
                <p>index.html</p>
            </div>

            <div className="file-folder-div file-div">
                <img src={file} alt="file-icon" />
                <p>index.html</p>
            </div>

            <div className="file-folder-div">
                <img src={folder} alt="file-icon" />
                <p>Assets</p>
            </div>

            <div className="file-folder-div">
                <img src={folder} alt="file-icon" />
                <p>Assets</p>
            </div>

            <div className="file-folder-div">
                <img src={folder} alt="file-icon" />
                <p>Assets</p>
            </div>
            
            <div className="file-folder-div create-div">
                <img src={create} alt="file-icon" />
            </div>
        </div>
    );
};

export default Listing;