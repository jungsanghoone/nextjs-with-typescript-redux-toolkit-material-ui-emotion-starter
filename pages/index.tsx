/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Example from '../components/Example';
import wrapper from '../store';
import { Page } from '../constants';
import { changePage } from '../store/page/pageSlice';

function Index(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          eSignon
        </Typography>
        <div>
          <Example />
        </div>
      </Box>
    </Container>
  );
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  await store.dispatch(
    changePage({
      relativeUrl: Page.DOCUMENT.relativeUrl,
    }),
  );
  return { props: {} };
});

export default connect(state => state)(Index);
