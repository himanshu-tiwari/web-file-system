import React from 'react';
import './index.scss';
import up from '../../assets/icons/navbar-up.png';

const Navbar = (props) => {
    const { structure, folderUp, parents, peekInFolder, currentFolder } = props;

    const pathString = parents.map((parent, i) => {
        if (structure.hasOwnProperty(parent)) {
                return <span className="directory-name" onClick={() => peekInFolder(parent)} key={i}>{ structure[parent].name } <span className="slash">/ </span></span>;
        } else {
            return '';
        }
    });

    return(
        <div className="navbar">
            <img src={up} alt="up-icon" onClick={folderUp} className={ !(parents.length > 0) ? 'disabled' : '' } />
            { pathString }
            <span className="directory-name" onClick={() => peekInFolder(currentFolder)}>{ structure[currentFolder].name }</span>
        </div>
    )
};

export default Navbar;