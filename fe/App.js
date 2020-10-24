import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/routes';
import {Provider} from 'react-redux';
import configureStore from './redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';

const {store, presistor} = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={presistor}>
                    <NavigationContainer>
                        <Routes />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
