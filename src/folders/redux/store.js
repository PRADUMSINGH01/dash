import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import wishlish from './slice'
import mySaga from '../saga/saga';
import wishlistSlice from './wishlistSlice';
import filter from './filter';

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store  = configureStore({
    reducer:{
        api:wishlish,
        wishlistreduces:wishlistSlice,
        filterreducer:filter,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})
   


sagaMiddleware.run(mySaga)