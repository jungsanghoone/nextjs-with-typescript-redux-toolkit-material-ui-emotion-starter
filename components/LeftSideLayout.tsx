/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { styled, CSSObject } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiListItemButton from '@material-ui/core/ListItemButton';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { usePage } from '../hooks/usePage';
import { useDrawer } from '../hooks/useDrawer';

const drawerWidth = 80;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
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

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
  minWidth: 'auto',
  '& .MuiSvgIcon-root': {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function LeftSideLayout(): JSX.Element {
  //const { page } = useSelector<RootState, RootState>(state => state);
  const { selectedPage } = usePage();
  const { open, drawerOpen, drawerClose } = useDrawer();
  console.log('LeftSideLayout open', open);

  const { relativeUrl } = selectedPage || '/documents/document';
  const leftMenu = [
    {
      title: '문서',
      href: '/documents/document',
      icon: <WorkOutlineIcon />,
    },
    {
      title: '서식',
      href: '/templates/template',
      icon: <ColorLensIcon />,
    },
    {
      title: '브랜딩',
      href: '/branding',
      icon: <MailOutlineIcon />,
    },
    {
      title: '설정',
      href: '/settings',
      icon: <SettingsIcon />,
    },
  ];
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
        <Divider />
        <List sx={{ padding: 0 }}>
          {leftMenu.map(info => (
            <Link href={info.href} passHref key={info.title}>
              <ListItemButton
                sx={{
                  bgcolor: info.href === relativeUrl ? '#FFFFFF' : '#EEEEEE',
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      info.href === relativeUrl
                        ? '#0199EB'
                        : 'rgba(0, 0, 0, 0.54)',
                  }}
                >
                  {info.icon}
                </ListItemIcon>
                <ListItemText
                  primary={info.title}
                  primaryTypographyProps={{
                    color:
                      info.href === relativeUrl
                        ? '#0199EB'
                        : 'rgba(0, 0, 0, 0.54)',
                    fontWeight: info.href === relativeUrl ? 'bold' : 400,
                  }}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
