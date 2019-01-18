import React from 'react';
import './index.scss';
import down from '../../assets/icons/down.svg';

const Sidebar = (props) => {
    const { contents } = props.list;
    const displayChildren = (e) => {
        e.target.closest("ul").classList.toggle("active");
    };

    const createStructure = (contents) => {
        return contents.map(folder => {
            let { id, name, type, contents } = folder;
            name = typeof(name) === "string" ? name : '';
            type = typeof(type) === "string" ? type : '';
            contents = typeof(contents) === "object" && contents instanceof Array && contents.length ? contents : [];

            if (type === "folder") {
                if (contents.length) {
                    return(
                        <li key={id}>
                            <span className="text-span">
                                { name } <span className="gap"></span> <img className="up" src={down} alt="down" />
                            </span>
                            <ul className="internal-directories">
                                { createStructure(contents) }
                            </ul>
                        </li>
                    );
                } else {
                    return(
                        <li key={id}>
                            <span className="text-span">
                                { name }
                            </span>
                        </li>
                    );
                }
            }
            return '';
        });
    };
    const listStructure = typeof(contents) === "object" && contents instanceof Array && contents.length ? createStructure(contents) : '';

    return(
        <div className="sidebar">
            <p className="folder">ROOT</p>

            <ul className="directory-structure" onClick={displayChildren}>
                { listStructure }
            </ul>
        </div>
    );
};

export default Sidebar;