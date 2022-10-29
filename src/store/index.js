import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware = [thunk];

let store;
export function configStore() {
    store = createStore(rootReducer,
        composeWithDevTools(applyMiddleware(...middleware),
    ));
    return store;
}
