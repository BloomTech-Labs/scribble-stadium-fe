import { global, squad } from '../state/actions';
import { reducer } from '../state/reducers/squadReducer';

describe('squadReducer test suite', () => {
    const initialState = null;

    it('should return the initial state with no actions passed in', () => {
        const action = { type: null };
        const state = reducer(initialState, action);
        expect(state).toEqual(null);
    });

    it('should return an array if passed in action', () => {
        const action = { type: squad.SET_SQUAD_FACEOFFS, payload: ['a', 'b', 'c', 'd'] };
        const state = reducer(initialState, action);
        expect(state).toHaveLength(4);
        expect(state).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should retrun initial state with clear users action', () => {
        const action = { type: global.CLEAR_USERS };
        const state = reducer(initialState, action);
        expect(state).toEqual(null);
    });
});
