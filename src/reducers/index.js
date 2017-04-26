import { combineReducers } from 'redux';
import MediaReducer from './MediaReducer';

export default combineReducers({
    media: MediaReducer
});