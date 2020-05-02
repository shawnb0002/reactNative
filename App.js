import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;


const store = ConfigureStore();

export default function App() {
    return (
    //The provider passes the store as props so that all child components of Main can connect to the store.
    <Provider store={store}>
        <Main />
    </Provider>
    );
}