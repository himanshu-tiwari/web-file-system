import v35 from 'uuid/v5';

export const createFolder = (folder) => {
    const { name, path, existingKeys } = folder;

    if (typeof(name) === "string" && name.length > 0) {
        const MY_NAMESPACE = '299f6e91-20fd-4f61-8afc-e6deec6b62d1';
        folder.id = v35(path + name, MY_NAMESPACE);

        if (existingKeys.indexOf(folder.id) > -1) {
            return {
                type: 'CREATE_FOLDER_ERROR',
                error: 'A folder with this name alredy exists! Please choose a new one!'
            };
        } else {
            const parents = path.trim().split('/').filter(parent => parent.length > 0);
            folder.parent = parents[parents.length - 1];
    
            folder.contents = [];
            
            return {
                type: 'CREATE_FOLDER',
                data: folder
            };
        }
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