const initState = {
    name: "Assets",
    size: "1mb",
    creator: "Himanshu",
    createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
    contents: [{
        name: "index.html",
        size: "542kb",
        creator: "Himanshu",
        extension: "html",
        createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
        type: "file"
    },
    {
        name: "index.js",
        size: "542kb",
        creator: "Himanshu",
        extension: "js",
        createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
        type: "file"
    },
    {
        name: "Assets",
        size: "1mb",
        creator: "Himanshu",
        createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
        type: "folder",
        contents: [{
            name: "index.html",
            size: "542kb",
            creator: "Himanshu",
            extension: "html",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "file"
        },
        {
            name: "Assets",
            size: "1mb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            contents: []
        }]
    }],
    path: 'root/project',
    parents: {
        root: "root",
        project: "project"
    },
    all: {
        project: {
            "index.html": {},
            "index.js": {},
            Assets: {
                images: {
                    icons: {
                        "icon.svg": {}
                    }
                }
            }
        }
    }
};

const folderReducer = (state = initState, action) => {
    return state;
};

export default folderReducer;