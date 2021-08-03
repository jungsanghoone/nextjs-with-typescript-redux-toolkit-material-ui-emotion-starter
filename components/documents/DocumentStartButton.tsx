import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

export default function DocumentStartButton(): JSX.Element {
  return (
    <nav aria-label="document start">
      <List sx={{ display: 'flex', height: theme => theme.spacing(10) }}>
        <ListItem disablePadding sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{ width: '160px', height: '40px', fontWeight: 'bold' }}
          >
            문서 작성하기
          </Button>
        </ListItem>
      </List>
    </nav>
  );
}
