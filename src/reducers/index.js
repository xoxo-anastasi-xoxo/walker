import { combineReducers } from 'redux'
import main_info from './main_info';
import user from './user';

let isNotified = true;

const rootReducer = combineReducers({
    main_info,
    user
});

export default rootReducer;