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
import { usePage } from '../hooks/usePage';
import { useDrawer } from '../hooks/useDrawer';
import Image from 'next/image';

const drawerWidth = 80;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  //...theme.mixins.toolbar,
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
      selectIcon: '/images/icon-document-blue.png',
      icon: '/images/icon-document.png',
    },
    {
      title: '서식',
      href: '/templates/template',
      selectIcon: '/images/icon-form-blue.png',
      icon: '/images/icon-form.png',
    },
    {
      title: '브랜딩',
      href: '/branding',
      selectIcon: '/images/icon-branding-blue.png',
      icon: '/images/icon-branding.png',
    },
    {
      title: '설정',
      href: '/settings',
      selectIcon: '/images/icon-set-blue.png',
      icon: '/images/icon-set.png',
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
        <List sx={{ padding: 0 }}>
          {leftMenu.map((info, index) => (
            <>
              <Link href={info.href} passHref key={info.title}>
                <ListItemButton
                  sx={{
                    bgcolor: info.href === relativeUrl ? '#FFFFFF' : '#EEEEEE',
                  }}
                >
                  <Image
                    src={
                      info.href === relativeUrl ? info.selectIcon : info.icon
                    }
                    alt={info.title}
                    width="32"
                    height="32"
                  />
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
              {leftMenu.length !== index + 1 && (
                <Divider sx={{ borderColor: '#e3e3e3', mx: 0.75 }} />
              )}
            </>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
