import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: 'this is a new comment!'
}
{
    type: EDIT_COMMENT,
    id: uuid.v4(),
    text: 'this is edited content of the comment'
}
{
    type: REMOVE_COMMENT,
    id: uuid.v4()
}
{
    type: THUMB_UP_COMMENT,
    id: uuid.v4(),
    votes: 0
}
{
    type: THUMB_DOWN_COMMENT,
    id: uuid.v4(),
    votes: 0
}


export function createComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
    }
}

export function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4(),
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

export function thumbUp(votes) {
    return {
        type: THUMB_UP_COMMENT,
        text,
        id: uuid.v4(),
        votes
    }
}

export function thumbDown(votes) {
    return {
        type: THUMB_DOWN_COMMENT,
        text,
        id: uuid.v4(),
        votes
    }
}


const boundCreateComment = text => dispatch(createComment(text));
boundCreateComment('New comment created!');

const boundEditComment = text => dispatch(editComment(text));
boundEditComment('Comment has been edited!');

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment('Comment has been removed!');

const boundThumbUp = votes => dispatch(thumbUp(votes));
boundThumbUp('Thumb up given.');

const boundThumbDown = votes => dispatch(thumbDown(votes));
boundThumbDown('Thumb down given.');