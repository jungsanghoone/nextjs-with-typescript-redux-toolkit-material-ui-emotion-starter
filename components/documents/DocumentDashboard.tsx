import * as React from 'react';
import { useTranslations } from 'next-intl';
import MuiListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Image from 'next/image';
import starIcon from '../../public/images/icon-star-border.png';
import starSelectIcon from '../../public/images/icon-star.png';
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
    maxWidth: theme.spacing(6.75),
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}));

function DocumentDashboard(): JSX.Element {
  const t = useTranslations('SideDocument.DocumentDashboard');
  const [important, setImportant] = React.useState(false);
  const handleImportant = () => setImportant(!important);
  return (
    <nav aria-label="document dashboard">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: theme => theme.spacing(11),
          maxWidth: theme => theme.spacing(27.5),
        }}
      >
        <CustomListItemButton
          sx={{
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: '70px',
            justifyContent: 'center',
            px: 1,
          }}
        >
          <ListItemText
            primary="10"
            secondary={t('WORKFLOW_dashboard_progress')}
          />
        </CustomListItemButton>
        <CustomListItemButton
          onClick={handleImportant}
          sx={{
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: '70px',
            justifyContent: 'center',
            px: 1,
          }}
        >
          <ListItemText
            primary={
              <Image
                src={important ? starSelectIcon : starIcon}
                alt="document important"
                width="32"
                height="32"
              />
            }
            secondary={t('WORKFLOW_dashboard_important')}
          />
        </CustomListItemButton>
        <CustomListItemButton
          sx={{
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: '70px',
            justifyContent: 'center',
            px: 1,
          }}
        >
          <ListItemText
            primary="3"
            secondary={t('WORKFLOW_dashboard_imminent')}
          />
        </CustomListItemButton>
      </Box>
    </nav>
  );
}

export default React.memo(DocumentDashboard);
