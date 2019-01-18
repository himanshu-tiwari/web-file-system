import React from 'react';
import './index.scss';
import up from '../../assets/icons/navbar-up.png';

const Navbar = (props) => {
    const { parents, path } = props;

    const pathString = path.split('/').map((parent, i) => {
        if (i === path.split('/').length-1) {
            return <span className="directory-name" key={i}>{ parents[parent] }</span>;
        } else {
            return <span className="directory-name" key={i}>{ parents[parent] } <span className="slash">/ </span></span>;
        }
    });

    return(
        <div className="navbar">
            <img src={up} alt="up-icon"/>
            { pathString }
        </div>
    )
};

export default Navbar;