import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default App;
