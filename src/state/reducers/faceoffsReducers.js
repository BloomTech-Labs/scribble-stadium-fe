import { global, faceoffs } from '../actions';

const initialState = {
    squadId: null,
    child1: {},
    child2: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case faceoffs.SET_SQUAD_ID: 
            return {
                ...state,
                squadId: action.payload.ID
        };
        case faceoffs.SET_TEAM_SUBMISSIONS: 
            return {
                ...state,
                child1: action.payload.child1,
                child2: action.payload.child2
            };
        case global.CLEAR_USERS: 
            return initialState;
        default: 
            return state;
    }
}