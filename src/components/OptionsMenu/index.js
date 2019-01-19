import React from 'react';
import './index.scss';

const OptionsMenu = (props) => {
    const { toggleInfoModal, peekInFolder } = props;
    
    return(
        <div className="options-menu">
            <p onClick={peekInFolder}>Open</p>
            <p onClick={toggleInfoModal}>Get info</p>
            <p className="delete">Delete</p>
        </div>
    );
};

export default OptionsMenu;