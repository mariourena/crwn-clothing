import { SET_CURRENT_USER } from './user.types';

export const setCurrentUser = payload => ({
    type: SET_CURRENT_USER,
    payload,
});
