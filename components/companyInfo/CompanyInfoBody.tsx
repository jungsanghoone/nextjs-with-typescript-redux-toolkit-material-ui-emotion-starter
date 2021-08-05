/* eslint-disable camelcase */
import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import LinearProgress, {
  linearProgressClasses,
} from '@material-ui/core/LinearProgress';
import { Grid } from '@material-ui/core';
import CustomTypography from '../cmn/CustomTypography';
import newIcon from '../../public/images/icon-new.png';
import useCompanyProductInfo from '../../hooks/useCompanyProductInfo';
import CircularIndeterminate from '../cmn/CustomCircular';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function CompanayInfoBody(): JSX.Element {
  const { data, isLoading, isError } = useCompanyProductInfo();

  if (isLoading) return <CircularIndeterminate />;
  if (isError) return <div>failed to load</div>;

  const { body } = data;
  const { workflow_usage, workflow_capacity } = body;
  return (
    <>
      <Box
        sx={{
          maxWidth: 220,
          height: theme => theme.spacing(7.5),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mx: 1.25,
        }}
      >
        <Grid container spacing={0} sx={{ height: 20 }}>
          <Grid item xs={5}>
            <CustomTypography>잔여 문서</CustomTypography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <CustomTypography>
              ({workflow_usage}/{workflow_capacity})
            </CustomTypography>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: 'right' }}>
            <Image src={newIcon} alt="count info" width={20} height={20} />
          </Grid>
        </Grid>
        <BorderLinearProgress
          variant="determinate"
          value={(workflow_usage / Number(workflow_capacity)) * 100 || 0}
          sx={{ width: 200, mt: 1 }}
        />
      </Box>
    </>
  );
}

export default React.memo(CompanayInfoBody);
