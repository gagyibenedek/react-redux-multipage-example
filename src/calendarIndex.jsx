import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CalendarContainer from './CalendarContainer';
import { configureCalendarStore } from './store/configureStore';

const store = configureCalendarStore();
ReactDOM.render(
    <Provider store={store}>
        <CalendarContainer />
    </Provider>,
    document.getElementById('calendar'),
);
