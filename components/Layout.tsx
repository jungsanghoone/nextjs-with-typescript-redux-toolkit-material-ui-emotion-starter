/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import Image from 'next/image';
import eSignonLogo from '../public/images/eSignon_logo.png';
import { styled, Theme, CSSObject } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import { useDrawer } from '../hooks/useDrawer';
import { ReactNode } from 'react';

const drawerWidth = 200;
const leftSideWidth = 80;
interface IChildrenComponent {
  children: ReactNode;
}
const openedMixin = (): CSSObject => ({
  marginLeft: leftSideWidth,
  width: drawerWidth,
});

const closedMixin = (theme: Theme): CSSObject => ({
  overflowX: 'hidden',
  width: `calc(${theme.spacing(0)})`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  minHeight: theme.spacing(7.5),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.default,
  zIndex: theme.zIndex.drawer + 1,
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  boxShadow: 'none',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth + leftSideWidth}px)`,
  }),
  ...(!open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${leftSideWidth}px)`,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(),
    '& .MuiDrawer-paper': openedMixin(),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Layout({ children }: IChildrenComponent): JSX.Element {
  const { open } = useDrawer();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          height: theme => theme.spacing(7.5),
          minHeight: theme => theme.spacing(7.5),
          maxHeight: theme => theme.spacing(7.5),
        }}
      ></AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Image src={eSignonLogo} alt="eSignon Logo" width={120} height={60} />
        </DrawerHeader>
        <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25, mt: -0.125 }} />
        123
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
