import { combineReducers } from "redux";
import posts from './posts';
import auth from './auth';
import profile from './profile';
import friendship from './friendship';
import comments from './comment';

export default combineReducers({
    posts,
    auth,
    profile,
    friendship,
    comments
});
