export default interface DrawerState {
  open: boolean;
  drawerOpen?: () => void;
  drawerClose?: () => void;
}
