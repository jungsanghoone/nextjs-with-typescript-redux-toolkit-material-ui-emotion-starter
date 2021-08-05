import { Divider } from '@material-ui/core';
import * as React from 'react';
import { useDrawer } from '../../hooks/useDrawer';
import CustomCompanyInfoFooterBox from '../cmn/CustomCompanyInfoFooterBox';
import CompanayInfoBody from '../companyInfo/CompanyInfoBody';
import CompanyInfoFooter from '../companyInfo/CompanyInfoFooter';
import CompanyInfoHeader from '../companyInfo/CompanyInfoHeader';

function SideCompanyInfo(): JSX.Element {
  const { open } = useDrawer();
  return (
    <CustomCompanyInfoFooterBox open={open}>
      <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25, mt: -0.125 }} />
      <CompanyInfoHeader />
      <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25, mt: -0.125 }} />
      <CompanayInfoBody />
      <Divider sx={{ borderColor: '#e3e3e3', mx: 1.25, mt: -0.125 }} />
      <CompanyInfoFooter />
    </CustomCompanyInfoFooterBox>
  );
}

export default React.memo(SideCompanyInfo);
