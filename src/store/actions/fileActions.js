import v35 from 'uuid/v5';

export const createFile = (file) => {
    const { name, path, existingKeys } = file;
    
    if (typeof(name) === "string" && name.length > 0) {
        const MY_NAMESPACE = '299f6e91-20fd-4f61-8afc-e6deec6b62d1';
        file.id = v35(path + name, MY_NAMESPACE);

        if (existingKeys.indexOf(file.id) > -1) {
            return {
                type: 'CREATE_FILE_ERROR',
                error: 'A file with this name alredy exists! Please choose a new one!'
            };
        } else {
            const parents = path.trim().split('/').filter(parent => parent.length > 0);
            file.parent = parents[parents.length - 1];
    
            if (name.indexOf('.') > -1) {
                file.extension = name.split('.')[1];
    
                return {
                    type: 'CREATE_FILE',
                    data: file
                };
            } else {
                return {
                    type: 'CREATE_FILE_ERROR',
                    error: 'No file extension found!'
                };
            }
        }
    } else {
        return {
            type: 'CREATE_FILE_ERROR',
            error: 'No name entered!'
        };
    }
};

export const deleteFile = (file) => {
    console.log(file);
    if (!(typeof(file.parent) === "string" && file.parent.length > 0)) {
        const parents = file.path.trim().split('/').filter(parent => parent.trim().length > 0);
        file.parent = parents[parents.length -1];
    }

    return {
        type: 'DELETE_FILE',
        data: file
    }
}