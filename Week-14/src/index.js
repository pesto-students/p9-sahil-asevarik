import React from 'react';
import ReactDOM from 'react-dom/client';
import ReduxApp from './App';
import { Provider } from 'react-redux';
import { reduxStore } from './Redux/StepCountReducer';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-000000-01');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
    <ReduxApp />
    </Provider>
);


