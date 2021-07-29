import { Box, CssBaseline } from '@material-ui/core';
import * as React from 'react';
import { usePage } from '../../hooks/usePage';
import SideBranding from './SideBranding';
import SideDocument from './SideDocument';
import SideSettings from './SideSettings';
import SideTemplate from './SideTemplate';

function SideDetailMenu(): JSX.Element {
  const { selectedPage } = usePage();
  const { relativeUrl } = selectedPage || '/documents/document';
  let menu;

  switch (relativeUrl) {
    case '/documents/document':
      menu = <SideDocument />;
      break;
    case '/templates/template':
      menu = <SideTemplate />;
      break;
    case '/branding':
      menu = <SideBranding />;
      break;
    case '/settings':
      menu = <SideSettings />;
      break;
    default:
      break;
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {menu}
      </Box>
    </>
  );
}

export default React.memo(SideDetailMenu);
