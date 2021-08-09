import * as React from 'react';
import { useTranslations } from 'next-intl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

function DocumentStartButton(): JSX.Element {
  const t = useTranslations('SideDocument.DocumentStartButton');
  return (
    <nav aria-label="document start">
      <List sx={{ display: 'flex', height: theme => theme.spacing(10) }}>
        <ListItem disablePadding sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{ width: '160px', height: '40px', fontWeight: 'bold' }}
          >
            {t('WORKFLOW_start_button')}
          </Button>
        </ListItem>
      </List>
    </nav>
  );
}

export default React.memo(DocumentStartButton);
