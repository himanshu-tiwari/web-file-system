const initState = {
    structure: {
        root: {
            id: "root",
            name: "root",
            size: "1mb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            path: '/',
            type: "folder",
            contents: [
                "5119b1fc-2d20-5317-a2bd-1287745c894e"
            ]
        },
        "5119b1fc-2d20-5317-a2bd-1287745c894e": {
            id: "5119b1fc-2d20-5317-a2bd-1287745c894e",
            name: "project",
            size: "10kb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            path: 'root/',
            type: "folder",
            contents: [
                "0bcaa66e-21c2-5107-a5a1-5e27739d61db",
                "534f8804-ea28-5487-9be8-f0c47e01bc3f",
                "fd77888c-c916-508d-bf55-08423a8c96b6"
            ]
        },
        "0bcaa66e-21c2-5107-a5a1-5e27739d61db": {
            id: "0bcaa66e-21c2-5107-a5a1-5e27739d61db",
            name: "index.html",
            size: "10kb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            extension: "html",
            type: "file",
            path: "root/5119b1fc-2d20-5317-a2bd-1287745c894e/",
        },
        "534f8804-ea28-5487-9be8-f0c47e01bc3f": {
            id: "534f8804-ea28-5487-9be8-f0c47e01bc3f",
            name: "index.js",
            size: "10kb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            extension: "js",
            type: "file",
            path: "root/5119b1fc-2d20-5317-a2bd-1287745c894e/",
        },
        "fd77888c-c916-508d-bf55-08423a8c96b6": {
            id: "fd77888c-c916-508d-bf55-08423a8c96b6",
            name: "Assets",
            size: "10kb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            path: "root/5119b1fc-2d20-5317-a2bd-1287745c894e/",
            contents: [
                "40ca135a-ce0c-58e7-9fc0-0509aa28103b",
                "b47c6a79-f96c-521f-84f2-73b0c09662bf"
            ]
        },
        "40ca135a-ce0c-58e7-9fc0-0509aa28103b": {
            id: "40ca135a-ce0c-58e7-9fc0-0509aa28103b",
            name: "images",
            size: "10kb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            path: "root/5119b1fc-2d20-5317-a2bd-1287745c894e/fd77888c-c916-508d-bf55-08423a8c96b6/",
            contents: [
                "13834866-ec15-53d9-8436-c42dd6bc0a08"
            ]
        },
        "b47c6a79-f96c-521f-84f2-73b0c09662bf": {
            id: "b47c6a79-f96c-521f-84f2-73b0c09662bf",
            name: "songs",
            size: "10kb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            path: "root/5119b1fc-2d20-5317-a2bd-1287745c894e/fd77888c-c916-508d-bf55-08423a8c96b6/",
        },
        "13834866-ec15-53d9-8436-c42dd6bc0a08": {
            id: "13834866-ec15-53d9-8436-c42dd6bc0a08",
            name: "icons",
            size: "10kb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            type: "folder",
            path: "root/5119b1fc-2d20-5317-a2bd-1287745c894e/fd77888c-c916-508d-bf55-08423a8c96b6/40ca135a-ce0c-58e7-9fc0-0509aa28103b/",
            contents: [
                "132c4758-aab3-5469-aa90-714da1e3354b"
            ]
        },
        "132c4758-aab3-5469-aa90-714da1e3354b": {
            id: "132c4758-aab3-5469-aa90-714da1e3354b",
            name: "icon.svg",
            size: "1kb",
            creator: "Himanshu",
            created_at: "January 17, 2019 at 6:25:58 PM UTC+5:30",
            extension: "svg",
            type: "file",
            path: "root/5119b1fc-2d20-5317-a2bd-1287745c894e/fd77888c-c916-508d-bf55-08423a8c96b6/40ca135a-ce0c-58e7-9fc0-0509aa28103b/13834866-ec15-53d9-8436-c42dd6bc0a08/",
        }
    },
    currentFolder: '5119b1fc-2d20-5317-a2bd-1287745c894e',
    error: null
};

const folderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_FOLDER':
            return {
                ...state,
                structure: {
                    ...state.structure,
                    [action.data.id]: action.data,
                    [action.data.parent] : {
                        ...state.structure[action.data.parent],
                        contents: [
                            ...state.structure[action.data.parent].contents,
                            action.data.id
                        ]
                    }
                },
                error: null
            };
        
        case 'CREATE_FOLDER_ERROR':
            console.log(action.error);
            return {
                ...state,
                error: action.error
            };
        
        case 'DELETE_FOLDER':
            delete state.structure[action.data.id];
            state.structure[action.data.parent].contents = state.structure[action.data.parent].contents.filter(id => id!==action.data.id);
            return {
                ...state
            };
            
        case 'CHANGE_FOLDER':
            return {
                ...state,
                currentFolder: action.data
            };
        
        case 'CREATE_FILE':
            return {
                ...state,
                structure: {
                    ...state.structure,
                    [action.data.id]: action.data,
                    [action.data.parent] : {
                        ...state.structure[action.data.parent],
                        contents: [
                            ...state.structure[action.data.parent].contents,
                            action.data.id
                        ]
                    }
                },
                error: null
            };
        
        case 'CREATE_FILE_ERROR':
            console.log(action.error);
            return {
                ...state,
                error: action.error
            };

        case 'DELETE_FILE':
            delete state.structure[action.data.id];
            state.structure[action.data.parent].contents = state.structure[action.data.parent].contents.filter(id => id!==action.data.id);
            return {
                ...state
            };

        default:
            return state;
    }
};

export default folderReducer;