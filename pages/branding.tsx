/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import { NextPage } from 'next';
import wrapper from '../store';
import { changePage } from '../store/page/pageSlice';
import { Page } from '../constants';
import { usePage } from '../hooks/usePage';
import { useDrawer } from '../hooks/useDrawer';
import CustomMainBox from '../components/cmn/CustomMainBox';

export const getStaticProps = wrapper.getStaticProps(store => () => {
  store.dispatch(
    changePage({
      relativeUrl: Page.BRANDING.relativeUrl,
    }),
  );
  return { props: {} };
});
const Branding: NextPage = () => {
  const { selectedPage } = usePage();
  const { open } = useDrawer();
  console.log('page', selectedPage);
  return <CustomMainBox open={open}>Branding Page!</CustomMainBox>;
};

export default Branding;
