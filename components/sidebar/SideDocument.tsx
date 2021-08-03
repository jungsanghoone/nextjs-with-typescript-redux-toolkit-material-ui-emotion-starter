import * as React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import DocumentStartButton from '../documents/DocumentStartButton';
import DocumentDashboard from '../documents/DocumentDashboard';
import DocumentMenuList from '../documents/DocumentMenuList';
import List from '@material-ui/core/List';
import { DocumentMenu } from '../../constants';

export default function SideDocument(): JSX.Element {
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 220, bgcolor: 'background.paper' }}>
        <DocumentStartButton />
        <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25 }} />
        <DocumentDashboard />
        <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25 }} />
        <Box
          sx={{
            width: '100%',
            maxWidth: 220,
            bgcolor: 'background.paper',
            mt: 2.5,
          }}
        >
          <List component="nav" aria-label="document menu list" sx={{ p: 0 }}>
            {DocumentMenu.values.map(document => (
              <DocumentMenuList
                key={document.docSearchCondition}
                docSearchCondition={document.docSearchCondition}
                menuTitle={document.menuTitle}
                menuIcon={document.menuIcon}
              />
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}
