import { combineReducers } from 'redux';
import listReducer from './listReducer';
import folderReducer from './folderReducer';

const rootReducer = combineReducers({
    'folder': folderReducer,
    'list': listReducer,
});

export default rootReducer;