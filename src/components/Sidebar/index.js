import React from 'react';
import './index.scss';
import down from '../../assets/icons/down.svg';

const Sidebar = (props) => {
    const { structure, disabled, peekInFolder, currentFolder } = props;
    const { contents } = structure.root;

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
                    const active = (id === currentFolder) || (structure[currentFolder].path.indexOf(id) > -1) ;
                    const current = id === currentFolder;
                    
                    if (contents.length) {
                        return(
                            <li
                                key={id}
                                className={(active ? 'active ' : '') + (current ? 'current' : '') + ''}
                            >
                                <span className="text-span" onClick={() => peekInFolder(id)}>
                                    { name } <span className="gap"onClick={() => peekInFolder(id)}></span> <img className="up" src={down} alt="down" onClick={() => peekInFolder(id)} />
                                </span>
                                <ul className="internal-directories">
                                    { createStructure(contents) }
                                </ul>
                            </li>
                        );
                    } else {
                        return(
                            <li
                                key={id}
                                className={(active ? 'active ' : '') + (current ? 'current' : '') + ''}
                            >
                                <span className="text-span" onClick={() => peekInFolder(id)}>
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

            <ul className="directory-structure">
                { listStructure }
            </ul>
        </div>
    );
};

export default Sidebar;