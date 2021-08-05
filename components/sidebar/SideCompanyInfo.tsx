import { Box, Divider } from '@material-ui/core';
import * as React from 'react';
import CompanayInfoBody from '../companyInfo/CompanyInfoBody';
import CompanyInfoFooter from '../companyInfo/CompanyInfoFooter';
import CompanyInfoHeader from '../companyInfo/CompanyInfoHeader';

function SideCompanyInfo(): JSX.Element {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: 220, height: 180 }}>
      <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25, mt: -0.125 }} />
      <CompanyInfoHeader />
      <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25, mt: -0.125 }} />
      <CompanayInfoBody />
      <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25, mt: -0.125 }} />
      <CompanyInfoFooter />
    </Box>
  );
}

export default React.memo(SideCompanyInfo);
