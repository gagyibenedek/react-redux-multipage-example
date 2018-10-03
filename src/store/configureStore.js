import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import prospectReducer from '../reducers/prospectReducer';
import calendarReducer from '../reducers/calendarReducer';

export function configureSchedulerStore() {
    return createStore(
        prospectReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk),
    );
}

export function configureCalendarStore() {
    return createStore(
        calendarReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk),
    );
}
