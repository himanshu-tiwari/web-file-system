import React from 'react';
import './index.scss';
import close from '../../assets/icons/close.svg';
import file from '../../assets/icons/file.png';
import folder from '../../assets/icons/folder.png';

const InfoModal = (props) => {
    const { toggleInfoModal, currentTarget } = props;
    const { name, size, creator, createdAt } = currentTarget[0];
    
    return(
        <div className="info-modal-overlay">
            <div className="info-modal">
                <div className="text">
                    <p className="heading">File Info</p>
                    <img src={close} alt="close-icon" className="close" onClick={toggleInfoModal} />

                    <div data-extension="html" className="file-div">
                        <img src={file} alt="file-icon" />
                    </div>

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