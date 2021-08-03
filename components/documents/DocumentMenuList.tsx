import * as React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MuiListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import CustomListItemButton from '../cmn/CustomListItemButton';
import Image from 'next/image';
import allIcon from '../../public/images/icon-all.png';
import { DocumentMenu } from '../../constants';
import { useDocuments } from '../../hooks/useDocuments';
import { styled } from '@material-ui/core';

interface Props {
  docSearchCondition: string;
  menuTitle: string;
  menuIcon: string;
}

const ListItemText = styled(MuiListItemText)<{ component?: React.ElementType }>(
  {
    '& .MuiListItemText-primary': {
      fontSize: 14,
    },
  },
);

export default function DocumentMenuList(props: Props): JSX.Element {
  const { docSearchCondition, menuTitle, menuIcon } = props;
  const { selectedCondition, changeDocCondition } = useDocuments();
  console.log(selectedCondition.docSearchCondition);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: theme => theme.spacing(5),
      }}
    >
      <CustomListItemButton
        selected={docSearchCondition === selectedCondition.docSearchCondition}
        onClick={() => changeDocCondition(docSearchCondition)}
      >
        <ListItemIcon sx={{ minWidth: 44 }}>
          <Image src={menuIcon} alt={menuTitle} width="24" height="24" />
        </ListItemIcon>
        <ListItemText primary={menuTitle} />
      </CustomListItemButton>
    </Box>
  );
}
