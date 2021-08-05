import * as React from 'react';
import Box from '@material-ui/core/Box';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MuiListItemText from '@material-ui/core/ListItemText';
import Image from 'next/image';
import { styled } from '@material-ui/core';
import CustomListItemButton from '../cmn/CustomListItemButton';
import { useDocuments } from '../../hooks/useDocuments';

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

function DocumentMenuList(props: Props): JSX.Element {
  const { docSearchCondition, menuTitle, menuIcon } = props;
  const { selectedCondition, changeDocCondition } = useDocuments();

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

export default React.memo(DocumentMenuList);
