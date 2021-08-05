/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import { NextPage } from 'next';
import wrapper from '../store';
import { changePage } from '../store/page/pageSlice';
import { Page } from '../constants';
import { usePage } from '../hooks/usePage';
import CustomMainBox from '../components/cmn/CustomMainBox';
import { useDrawer } from '../hooks/useDrawer';

export const getStaticProps = wrapper.getStaticProps(store => () => {
  store.dispatch(
    changePage({
      relativeUrl: Page.SETTINGS.relativeUrl,
    }),
  );
  return { props: {} };
});

const Settings: NextPage = () => {
  const { selectedPage } = usePage();
  const { open } = useDrawer();
  console.log('page', selectedPage);
  return <CustomMainBox open={open}>Settings Page!</CustomMainBox>;
};

export default Settings;
