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
    position: 'fixed',
    bottom: theme.spacing(0),
    width: 220,
    height: 180,
  }),
  ...(!open && {
    position: 'fixed',
    bottom: theme.spacing(0),
    width: theme.spacing(0),
    height: theme.spacing(0),
  }),
}));

function CustomCompanyInfoFooterBox({
  children,
  open,
}: IChildrenComponent): JSX.Element {
  return <Box open={open}>{children}</Box>;
}

export default React.memo(CustomCompanyInfoFooterBox);
