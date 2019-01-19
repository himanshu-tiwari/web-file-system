import { combineReducers } from 'redux';
import folderReducer from './folderReducer';

const rootReducer = combineReducers({
    'folder': folderReducer,
});

export default rootReducer;