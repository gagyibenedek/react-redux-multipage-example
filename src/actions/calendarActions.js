import * as types from './calendarActionTypes';

export function changeSetting() {
    return {
        type: types.CHANGE_HAPPENED,
    };
}

export function save() {
    return {
        type: types.SAVED,
    };
}
