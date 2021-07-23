import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { Animated, Basic, Combined } from '../shared/styles';

export default function Index(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Button variant={'contained'}>Next.js</Button>
        <div>
          <Basic>Cool Styles</Basic>
          <Combined>
            With <code>:hover</code>.
          </Combined>
          <Animated>Let`s bounce.</Animated>
        </div>
      </Box>
    </Container>
  );
}
