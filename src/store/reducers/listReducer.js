const initState = {
    name: "root",
    id: "root",
    contents: [{
        id: "project",
        name: "project",
        contents: [{
            id: "assets",
            name: "Assets",
            contents: [{
                id: "images",
                name: "images",
                contents: [{
                    id: "icons",
                    name: "icons",
                    contents: []
                }]
            }, {
                id: "songs",
                name: "songs"
            }]
        }]
    }]
};

const listReducer = (state = initState, action) => {
    return state;
};

export default listReducer;