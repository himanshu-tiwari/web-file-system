import { stringify } from "querystring";

export const createFile = (file) => {
    const { name, path } = file;

    if (typeof(name) === "string" && name.length > 0) {
        file.id = name.trim().split(' ').join('-');
        const parents = path.split('/').filter(parent => parent.length > 0);
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
    } else {
        return {
            type: 'CREATE_FILE_ERROR',
            error: 'No name entered!'
        };
    }
};