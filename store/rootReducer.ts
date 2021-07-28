/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import counter from './counter/counterSlice';
import page from './page/pageSlice';
import drawer from './drawer/drawerSlice';

export const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    counter,
    page,
    drawer,
  })(state, action);
};

// export const rootReducer = combineReducers({
//   counter,
// });

export type RootState = ReturnType<typeof rootReducer>;
