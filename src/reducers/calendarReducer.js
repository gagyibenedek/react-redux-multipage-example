import initialState from './calendarInitialState';
import { CHANGE_HAPPENED, SAVED } from '../actions/calendarActionTypes';

export default function prospectReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_HAPPENED:
            return {
                ...state,
                dirty: true,
            };
        case SAVED:
            return {
                ...state,
                dirty: false,
            };
        default:
            return state;
    }
}
