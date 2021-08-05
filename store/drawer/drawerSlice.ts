/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';
import DrawerState from '../../constants/Drawer';
import { RootState } from '../rootReducer';

const initialState = { open: true } as DrawerState;

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    drawerOpen(state) {
      state.open = true;
      console.log('drawerOpen', state.open);
    },
    drawerClose(state) {
      state.open = false;
      console.log('drawerClose', state.open);
    },
  },
});

export const { drawerOpen, drawerClose } = drawerSlice.actions;
export default drawerSlice.reducer;

export const drawerSelector = (state: RootState): DrawerState => state.drawer;
