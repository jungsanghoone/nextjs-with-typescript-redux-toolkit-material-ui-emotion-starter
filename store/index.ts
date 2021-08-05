/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper';
import logger from 'redux-logger';
import { rootReducer, RootState } from './rootReducer';

const dev = process.env.NODE_ENV === 'development';
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([logger]),
  devTools: dev,
});

const setupStore = (context: any): EnhancedStore => store;
const makeStore: MakeStore<typeof store> = (context: Context) =>
  setupStore(context);
export const wrapper = createWrapper(makeStore, {
  debug: dev,
});

export default wrapper;
