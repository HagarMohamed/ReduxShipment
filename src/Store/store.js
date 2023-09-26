

import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { shipReducer } from '../Reducer/shipReducer';



export const store = configureStore({ reducer: shipReducer}, applyMiddleware(thunk));