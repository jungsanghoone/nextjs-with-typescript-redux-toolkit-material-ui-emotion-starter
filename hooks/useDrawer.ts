import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrawerState from '../constants/Drawer';
import {
  drawerSelector,
  drawerOpen,
  drawerClose,
} from '../store/drawer/drawerSlice';

export const useDrawer = (): DrawerState => {
  const dispatch = useDispatch();
  const drawerState = useSelector(drawerSelector);

  return {
    open: drawerState.open,
    drawerOpen: useCallback(() => dispatch(drawerOpen()), [dispatch]),
    drawerClose: useCallback(() => dispatch(drawerClose()), [dispatch]),
  };
};
