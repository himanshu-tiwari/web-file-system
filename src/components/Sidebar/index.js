import React from 'react';
import './index.scss';
import down from '../../assets/icons/down.svg';

const Sidebar = (props) => {
    return(
        <div className="sidebar">
            <p className="folder">ROOT</p>

            <ul className="directory-structure">
                <li>
                    <span className="text-span">
                        Songs <span className="gap"></span> <img className="up" src={down} alt="down" />
                    </span>
                    
                    <ul className="internal-directories">
                        <li>
                            <span className="text-span">
                                Songs1 <span className="gap"></span> <img src={down} alt="down" />
                            </span>
                            <ul className="internal-directories">
                                <li>
                                    <span className="text-span">
                                        Songs1 <span className="gap"></span> <img src={down} alt="down" />
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <span className="text-span">
                        Movies <span className="gap"></span> <img src={down} alt="down" />
                    </span>
                </li>
                
                <li>
                    <span className="text-span">
                        Tutorials <span className="gap"></span> <img className="hidden" src={down} alt="down" />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;