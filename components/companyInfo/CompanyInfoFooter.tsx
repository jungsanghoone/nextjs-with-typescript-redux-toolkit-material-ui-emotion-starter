import * as React from 'react';
import Link from 'next/link';
import { Box, Grid } from '@material-ui/core';
import CustomTypography from '../cmn/CustomTypography';

function CompanyInfoFooter(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: theme => theme.spacing(5),
      }}
    >
      <Grid
        container
        wrap="nowrap"
        spacing={0}
        sx={{
          maxWidth: 220,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          mx: 1.25,
        }}
      >
        <Grid item>
          <Link href="/" passHref>
            <a>
              <CustomTypography>로그아웃</CustomTypography>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default React.memo(CompanyInfoFooter);
