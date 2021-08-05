import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';

interface IChildrenComponent {
  children: ReactNode;
}
const EsignonTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.625),
  color: '#6c6c6c',
}));

function CustomTypography({ children }: IChildrenComponent): JSX.Element {
  return <EsignonTypography noWrap>{children}</EsignonTypography>;
}

export default React.memo(CustomTypography);
