import * as React from 'react';
import MuiListItemText from '@material-ui/core/ListItemText';

import { styled } from '@material-ui/core/styles';
import Image from 'next/image';
import starIcon from '../../public/images/icon-star-border.png';
import starSelectIcon from '../../public/images/icon-star.png';
import Box from '@material-ui/core/Box';
import CustomListItemButton from '../cmn/CustomListItemButton';

const ListItemText = styled(MuiListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontSize: theme.spacing(2.25),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6c6c6c',
    justifyContent: 'center',
    verticalAlign: 'middle',
    alignItems: 'center',
    display: 'flex',
    height: theme.spacing(4),
  },
  '& .MuiListItemText-secondary': {
    fontSize: theme.spacing(1.625),
    color: '#6c6c6c',
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
}));

function DocumentDashboard(): JSX.Element {
  const [important, setImportant] = React.useState(false);
  const handleImportant = () => setImportant(!important);
  return (
    <nav aria-label="document dashboard">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: theme => theme.spacing(11),
        }}
      >
        <CustomListItemButton>
          <ListItemText primary="10" secondary="진행 중" />
        </CustomListItemButton>
        <CustomListItemButton onClick={handleImportant}>
          <ListItemText
            primary={
              <Image
                src={important ? starSelectIcon : starIcon}
                alt={'document important'}
                width="32"
                height="32"
              />
            }
            secondary="중요"
          />
        </CustomListItemButton>
        <CustomListItemButton>
          <ListItemText primary="3" secondary="마감임박" />
        </CustomListItemButton>
      </Box>
    </nav>
  );
}

export default React.memo(DocumentDashboard);
