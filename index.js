/**
 * @format
 */

import React, { useEffect } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/stores/redux/store/store';

const app = () => {
    return <>
        <StatusBar
            animated={true}
            hidden={true}
        />
        <Provider store={store}>
            <App />
        </Provider>
    </>
}

AppRegistry.registerComponent(appName, () => app);
