import {CREATE_LIKES_LOAD , CREATE_COMMENT_SUCCESS , CREATE_LIKES_FAILED} from './types';

export function createLikes(){
     
}

export function create_like_loading(){
    return {
        type : CREATE_LIKES_LOAD,
    }
}

export function create_like_success(){
    return {
        type : CREATE_LIKES_SUCCESS,
    }
} 