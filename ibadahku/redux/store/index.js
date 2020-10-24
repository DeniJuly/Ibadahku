import {createStore, combineReducers, applyMiddleware} from 'redux';
import auth from '../_reducers/auth';
import Reactotron from '../../ReactotronConfig';
import rpm from 'redux-promise-middleware';
import {createLogger} from 'redux-logger'
import {persistStore, persistCombineReducers} from 'redux-persist';
import reducers from '../_reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import Thunk from 'redux-thunk';


const config = {
    key: 'primary',
    storage: AsyncStorage
}

const persistReducer = persistCombineReducers(config, reducers)
const logger = createLogger({})
const enhancers = applyMiddleware(logger, rpm, Thunk)

export default () => {
    let store = createStore(persistReducer, composeWithDevTools(enhancers));
    let presistor = persistStore(store);
    return {
        store,
        presistor
    }
}
