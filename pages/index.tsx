import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Example from '../components/Example';
import wrapper from '../store';
import { Page } from '../constants';
import { changePage } from '../store/page/pageSlice';
import { connect } from 'react-redux';

function Index({ store }): JSX.Element {
  console.log('props', store);
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

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ req, res, ...etc }) => {
      console.log(
        '2. Page.getServerSideProps uses the store to dispatch things',
      );

      await store.dispatch(
        changePage({ relativeUrl: Page.DOCUMENT.relativeUrl }),
      );
    },
);

export default connect(state => state)(Index);
