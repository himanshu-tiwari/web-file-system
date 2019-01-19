import React from 'react';
import './index.scss';
import close from '../../assets/icons/close.svg';
import file from '../../assets/icons/file.png';
import folder from '../../assets/icons/folder.png';

const InfoModal = (props) => {
    const { toggleInfoModal, currentTarget } = props;
    const { name, size, type, creator, createdAt, extension } = currentTarget;
    
    return(
        <div className="info-modal-overlay">
            <div className="info-modal">
                <div className="text">
                    <p className="heading">{`${type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} Info`}</p>
                    <img src={close} alt="close-icon" className="close" onClick={toggleInfoModal} />
                        {
                            type === "file" &&
                            <div data-extension={extension} className="file-div">
                                <img src={file} alt="file-icon" />
                            </div>
                        }
                        {
                            type === "folder" &&
                            <div className="folder-div">
                                <img src={folder} alt="folder-icon" />
                            </div>
                        }

                    <div className="details">
                        <p>
                            <span className="left part">Name:</span>
                            <span className="right part">{ name }</span>
                        </p>

                        <p>
                            <span className="left part">Size:</span>
                            <span className="right part">{ size }</span>
                        </p>

                        <p>
                            <span className="left part">Creator name:</span>
                            <span className="right part">{ creator }</span>
                        </p>

                        <p>
                            <span className="left part">Created date:</span>
                            <span className="right part">{ createdAt }</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InfoModal;