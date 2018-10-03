import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SchedulerContainer from './SchedulerContainer';
import { configureSchedulerStore } from './store/configureStore';

const store = configureSchedulerStore();
ReactDOM.render(
    <Provider store={store}>
        <SchedulerContainer />
    </Provider>,
    document.getElementById('scheduler'),
);
