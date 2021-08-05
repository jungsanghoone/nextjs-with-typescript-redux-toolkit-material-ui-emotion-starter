import * as React from 'react';
import MuiListItemButton from '@material-ui/core/ListItemButton';
import { styled } from '@material-ui/core/styles';
import { ReactNode } from 'react';

interface IChildrenComponent {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  selected?: boolean;
}

const ListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: prop => prop !== 'selected',
})(({ selected }) => ({
  ...(selected && {
    backgroundColor: '#EEEEEE',
  }),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}));

function CustomListItemButton({
  children,
  onClick,
  selected,
}: IChildrenComponent): JSX.Element {
  return (
    <ListItemButton onClick={onClick} selected={selected} disableRipple>
      {children}
    </ListItemButton>
  );
}

export default React.memo(CustomListItemButton);
