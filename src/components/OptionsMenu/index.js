import React from 'react';
import './index.scss';

const OptionsMenu = (props) => {
    return(
        <div className="options-menu">
            <p>Open</p>
            <p>Get info</p>
            <p className="delete">Delete</p>
        </div>
    );
};

export default OptionsMenu;