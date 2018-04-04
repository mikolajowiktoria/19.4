import { CREATE_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';
import comments from './comments';
import users from './users';
import uuid from uuid;
import { combineReducers } from 'redux';

const app = combineReducers({
    comments,
    users
});

const initialState = {
    comments: [],
    users: [],
    votes: 0
};

function app(state = initialState, action) {
    return {
        comments: comments(state.comments, action),
        users: users(state.users, action)
    };
}