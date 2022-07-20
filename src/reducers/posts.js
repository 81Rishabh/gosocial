import { UPDATE_POSTS } from "../actions/types";

export default function posts(state = [], action) {
    switch(action.type) {
        case UPDATE_POSTS:
            return action.posts
        default: 
           return state;
    }
}