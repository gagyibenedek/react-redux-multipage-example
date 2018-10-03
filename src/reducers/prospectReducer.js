import initialState from './prospectInitialState';
import { STEP_FORWARD } from '../actions/prospectActionTypes';
import { nextStep } from '../helpers/stepHelper';

export default function prospectReducer(state = initialState, action) {
    switch (action.type) {
        case STEP_FORWARD:
            return {
                ...state,
                step: nextStep(state.step),
            };
        default:
            return state;
    }
}
