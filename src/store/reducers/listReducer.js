const initState = {
    name: "root",
    type: "folder",
    id: "root",
    contents: [{
        id: "project",
        name: "project",
        type: "folder",
        contents: [{
            id: "index.html",
            name: "index.html",
            type: "file"
        }, {
            id: "index.js",
            name: "index.js",
            type: "file"
        }, {
            id: "assets",
            name: "Assets",
            type: "folder",
            contents: [{
                id: "images",
                name: "images",
                type: "folder",
                contents: [{
                    id: "icons",
                    name: "icons",
                    type: "folder",
                    contents: [{
                        id: "logo.svg",
                        name: "logo.svg",
                        type: "file"
                    }]
                }]
            }]
        }]
    }]
};

const listReducer = (state = initState, action) => {
    return state;
};

export default listReducer;