import * as React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { ReactNode } from 'react';

interface BoxProps extends MuiBoxProps {
  open?: boolean;
}

interface IChildrenComponent {
  children: ReactNode;
  open?: boolean;
}

const Box = styled(MuiBox, {
  shouldForwardProp: prop => prop !== 'open',
})<BoxProps>(({ theme, open }) => ({
  ...(open && {
    padding: theme.spacing(1),
  }),
  ...(!open && {
    padding: theme.spacing(1, 1, 1, 11),
  }),
}));

export default function CustomMainBox({
  children,
  open,
}: IChildrenComponent): JSX.Element {
  return (
    <Box component="div" open={open}>
      {children}
    </Box>
  );
}
