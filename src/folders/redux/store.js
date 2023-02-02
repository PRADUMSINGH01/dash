import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import wishlish from './slice'
import mySaga from '../saga/saga';
import wishlistSlice from './wishlistSlice';


let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store  = configureStore({
    reducer:{
        api:wishlish,
        wishlistreduces:wishlistSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})
   


sagaMiddleware.run(mySaga)