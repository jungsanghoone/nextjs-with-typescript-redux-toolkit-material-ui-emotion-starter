import * as React from 'react';
import { styled, CSSObject } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useDrawer } from '../hooks/useDrawer';
import { Page } from '../constants';
import SideMenu from './sidebar/SideMenu';

const drawerWidth = 80;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  minHeight: theme.spacing(7.5),
}));

const openedMixin = (): CSSObject => ({
  width: drawerWidth,
  overflowX: 'hidden',
  backgroundColor: '#EEEEEE',
  borderRight: 'none',
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(),
    '& .MuiDrawer-paper': openedMixin(),
  }),
}));

export default function LeftSideLayout(): JSX.Element {
  const { open, drawerOpen, drawerClose } = useDrawer();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={true}>
        <DrawerHeader>
          {open === true ? (
            <IconButton onClick={drawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          ) : (
            <IconButton onClick={drawerOpen}>
              <ChevronRightIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <List sx={{ padding: 0 }}>
          {Page.values.map((page, index) => (
            <SideMenu
              key={page.pageTitle}
              href={page.relativeUrl}
              title={page.pageTitle}
              selectIcon={page.selectIcon}
              icon={page.icon}
              end={Page.values.length === index + 1}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
