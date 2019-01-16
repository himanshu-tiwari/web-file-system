import React from 'react';
import './index.scss';
import close from '../../assets/icons/close.svg';
import file from '../../assets/icons/file.png';
import folder from '../../assets/icons/folder.png';

const InfoModal = (props) => {
    return(
        <div className="info-modal-overlay">
            <div className="info-modal">
                <div className="text">
                    <p className="heading">File Info</p>
                    <img src={close} alt="close-icon" className="close" />

                    <div data-extension="html" className="file-div">
                        <img src={file} alt="file-icon" />
                    </div>

                    <div className="details">
                        <p>
                            <span className="left part">Name:</span>
                            <span className="right part">index.html</span>
                        </p>

                        <p>
                            <span className="left part">Size:</span>
                            <span className="right part">542kb</span>
                        </p>

                        <p>
                            <span className="left part">Creator name:</span>
                            <span className="right part">Ankur</span>
                        </p>

                        <p>
                            <span className="left part">Created date:</span>
                            <span className="right part">24th Aug, 2018</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InfoModal;