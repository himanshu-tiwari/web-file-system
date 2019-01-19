import React, { Component } from 'react';
import './index.scss';

class OptionsMenu extends Component {
    componentWillMount = () => {
        document.addEventListener('click', this.handleOptionsMenu, false);
    };
    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleOptionsMenu, false);
    };

    handleOptionsMenu = (e) => {
        // if (this.node.contains(e.target)) {
        //     return;
        // } else {
            this.props.toggleOptionsMenu(e);
        // }
    }

    render() {
        const { toggleInfoModal, peekInFolder, openOptionAvailable } = this.props;
        
        return(
            <div className="options-menu" ref={node => this.node = node}>
                { openOptionAvailable && <p onClick={peekInFolder}>Open</p> }
                <p onClick={toggleInfoModal}>Get info</p>
                <p className="delete">Delete</p>
            </div>
        );
    }
};

export default OptionsMenu;