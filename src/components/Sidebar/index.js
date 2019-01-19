import React from 'react';
import './index.scss';
import down from '../../assets/icons/down.svg';

const Sidebar = (props) => {
    const { structure, disabled, peekInFolder } = props;
    const { contents } = structure.root;
    const displayChildren = (e) => {
        e.target.closest("li").classList.toggle("active");
        peekInFolder(e.target.closest("li").id);
    };

    const createStructure = (contents) => {
        return contents.map(fileFolder => {
            if (structure.hasOwnProperty(fileFolder)) {
                let { id, name, contents, type } = structure[fileFolder];
                name = typeof(name) === "string" ? name : '__';
                contents = (
                    typeof(contents) === "object" &&
                    contents instanceof Array &&
                    contents.length
                ) ? contents.filter(content => {
                    if (structure.hasOwnProperty(content)) {
                        return structure[content].type === "folder";
                    } else {
                        return false;
                    }
                }) : [];

                if (type === "folder") {
                    if (contents.length) {
                        return(
                            <li key={id} id={id}>
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
                            <li key={id} id={id}>
                                <span className="text-span">
                                    { name }
                                </span>
                            </li>
                        );
                    }
                } else {
                    return '';
                }
            } else {
                return '';
            }
        });
    };
    const listStructure = (
        typeof(contents) === "object" &&
        contents instanceof Array &&
        contents.length
    ) ? createStructure(contents) : '';

    return(
        <div className={`sidebar ${disabled ? 'disabled' : ''}`}>
            <p className="root-folder" onClick={() => peekInFolder("root")}>ROOT</p>

            <ul className="directory-structure" onClick={displayChildren}>
                { listStructure }
            </ul>
        </div>
    );
};

export default Sidebar;