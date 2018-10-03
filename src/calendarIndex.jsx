import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CalendarContainer from './CalendarContainer';
import { configureCalendarStore } from './store/configureStore';

const initProps = {
    dates: [
        new Date('1991-01-01'),
        new Date('1992-01-01'),
        new Date('1993-01-01'),
        new Date('1994-01-01'),
    ],
};

const store = configureCalendarStore(initProps);
ReactDOM.render(
    <Provider store={store}>
        <CalendarContainer initProps={initProps} />
    </Provider>,
    document.getElementById('calendar'),
);
