import * as React from 'react';
import { NextPage } from 'next';
import wrapper from '../../store';
import { changePage } from '../../store/page/pageSlice';
import { Page } from '../../constants';
import { usePage } from '../../hooks/usePage';
import MuiBox, { BoxProps as MuiBoxProps } from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { useDrawer } from '../../hooks/useDrawer';

export const getServerSideProps = wrapper.getServerSideProps(store => () => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things');
  store.dispatch(
    changePage({
      relativeUrl: Page.DOCUMENT.relativeUrl,
    }),
  );
});

interface BoxProps extends MuiBoxProps {
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

const Document: NextPage = () => {
  const { selectedPage } = usePage();
  const { open } = useDrawer();
  console.log('page', selectedPage);
  return (
    <Box component="div" open={open}>
      <div>Document Page!</div>
    </Box>
  );
};

export default Document;
