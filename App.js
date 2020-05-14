import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;


const {persistor, store} = ConfigureStore();

export default function App() {
    return (
    //The provider passes the store as props so that all child components of Main can connect to the store.
    <Provider store={store}>
        <PersistGate
            loading={<Loading />}
            persistor={persistor}>
            <Main />
        </PersistGate>
    </Provider>
    );
}