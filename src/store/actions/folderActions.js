export const createFolder = (folder) => {
    return {
        type: 'CREATE_FOLDER',
        data: folder
    };
};

export const changeFolder = (id) => {
    return {
        type: 'CHANGE_FOLDER',
        data: id
    }
}