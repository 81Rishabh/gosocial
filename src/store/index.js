import {createStore} from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

let middleware = [thunk];
let store;
export function configStore() {
    store = createStore(reducer , applyMiddleware(...middleware));
    return store;
}
