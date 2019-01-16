import React from 'react';
import './index.scss';
import up from '../../assets/icons/navbar-up.png';

const Navbar = (props) => {
    return(
        <div className="navbar">
            <img src={up} alt="up-icon"/>
            <span className="directory-name">root</span> <span className="slash">/ </span>
            <span className="directory-name">movies</span> <span className="slash">/ </span>
            <span className="directory-name">inception</span>
        </div>
    )
};

export default Navbar;