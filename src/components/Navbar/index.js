import React from 'react';
import './index.scss';
import up from '../../assets/icons/navbar-up.png';

const Navbar = (props) => {
    const { structure, folderUp, parents, peekInFolder, currentFolder, searchTerm, search } = props;

    const pathString = parents.map((parent, i) => {
        if (structure.hasOwnProperty(parent)) {
                return <span className="directory-name" onClick={() => peekInFolder(parent)} key={i}>{ structure[parent].name } <span className="slash">/ </span></span>;
        } else {
            return '';
        }
    });

    return(
        <div className="navbar">
            <div className="path">
                <img src={up} alt="up-icon" onClick={folderUp} className={ !(parents.length > 0) ? 'disabled' : '' } />
                { pathString }
                <span className="directory-name" onClick={() => peekInFolder(currentFolder)}>{ structure[currentFolder].name }</span>
            </div>

            <span className="gap"></span>
            <input value={searchTerm} onChange={(e) => search(e.target.value)} placeholder="Search for anything" />
        </div>
    )
};

export default Navbar;