const initState = {
    structure: {
        root: {
            id: "root",
            name: "root",
            size: "1mb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            path: '/',
            type: "folder",
            contents: [
                "project"
            ]
        },
        project: {
            id: "project",
            name: "project",
            size: "10kb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            path: 'root/',
            type: "folder",
            contents: [
                "index.html",
                "index.js",
                "assets"
            ]
        },
        "index.html": {
            id: "index.html",
            name: "index.html",
            size: "10kb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            extension: "html",
            type: "file"
        },
        "index.js": {
            id: "index.js",
            name: "index.js",
            size: "10kb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            extension: "js",
            type: "file"
        },
        assets: {
            id: "assets",
            name: "Assets",
            size: "10kb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            path: "root/project/",
            contents: [
                "images"
            ]
        },
        images: {
            id: "images",
            name: "images",
            size: "10kb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            path: "root/project/assets/",
            contents: [
                "icons"
            ]
        },
        songs: {
            id: "songs",
            name: "songs",
            size: "10kb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            path: "root/project/assets/",
        },
        icons: {
            id: "icons",
            name: "icons",
            size: "10kb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            path: "root/project/assets/images/",
            contents: [
                "icon.svg"
            ]
        },
        "icon.svg": {
            id: "icon.svg",
            name: "icon.svg",
            size: "1kb",
            creator: "Himanshu",
            createdAt: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            extension: "svg",
            type: "file"
        }
    },
    currentFolder: 'icons'
};

const folderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_FOLDER':
            console.log(action.data);
            break;
        
        case 'CHANGE_FOLDER':
            return {
                ...state,
                currentFolder: action.data
            };
        default:
            return state;
            break;
    }
};

export default folderReducer;