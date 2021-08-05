import * as React from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import CustomTypography from '../cmn/CustomTypography';
import useCompanyProductInfo from '../../hooks/useCompanyProductInfo';
import CircularIndeterminate from '../cmn/CustomCircular';
import crownIcon from '../../public/images/icon-crown.png';

function CompanyInfoHeader(): JSX.Element {
  const { data, isLoading, isError } = useCompanyProductInfo();

  if (isLoading) return <CircularIndeterminate />;
  if (isError) return <div>failed to load</div>;
  const { body } = data;
  const { name, contract_company_name } = body;

  const title =
    name === contract_company_name ? name : `${name}(${contract_company_name})`;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: theme => theme.spacing(10),
      }}
    >
      <Grid
        container
        wrap="nowrap"
        spacing={0}
        sx={{
          maxWidth: 220,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 1,
        }}
      >
        <Box
          sx={{
            mr: -3.75,
            mt: -8.375,
            zIndex: 1,
            transform: 'rotate(-20deg)',
          }}
        >
          <Image src={crownIcon} alt="company leader" width="30" height="20" />
        </Box>
        <Grid item>
          <Avatar sx={{ width: 60, height: 60 }}>
            <Image
              src="https://jc1storagejedocdemo1.blob.core.windows.net/jcone1sanghoone/MEMBER/tkdgnszoq@gmail.com/tkdgnszoq%40gmail.com_1621899823495.png?sig=2me7sAB0yYa0uLWbRvJN9q7mJ854UtTMXRF4CFxYOjo%3D&se=2021-08-06T01%3A20%3A28Z&sv=2015-04-05&sp=rl&sr=b"
              alt="member image"
              width="60"
              height="60"
            />
          </Avatar>
        </Grid>
        <Grid item xs zeroMinWidth sx={{ mx: 1 }}>
          <Grid>
            <CustomTypography>{title}</CustomTypography>
          </Grid>
          <Grid>
            <CustomTypography>tkdgnszoq@gmail.com</CustomTypography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default React.memo(CompanyInfoHeader);
