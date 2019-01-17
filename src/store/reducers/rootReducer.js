import { combineReducers } from 'redux';
import fileReducer from './fileReducer';
import folderReducer from './folderReducer';

const rootReducer = combineReducers({
    'file': fileReducer,
    'folder': folderReducer
});

export default rootReducer;