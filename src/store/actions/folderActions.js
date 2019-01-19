export const createFolder = (folder) => {
    const { name, path } = folder;
    if (typeof(name) === "string" && name.length > 0) {
        folder.id = name.trim().split(' ').join('-');

        const parents = path.split('/').filter(parent => parent.length > 0);
        folder.parent = parents[parents.length - 1];

        folder.contents = [];
        
        return {
            type: 'CREATE_FOLDER',
            data: folder
        };
    } else {
        return {
            type: 'CREATE_FOLDER_ERROR',
            error: 'No name entered!'
        };
    }
};

export const changeFolder = (id) => {
    return {
        type: 'CHANGE_FOLDER',
        data: id
    }
}