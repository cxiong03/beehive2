import {combineReducers} from 'redux';
import resourcesReducer from './resourcesReducer';
import newResourceReducer from './newResourceReducer'

export default combineReducers({
    resources: resourcesReducer,
    newResource: newResourceReducer 
});