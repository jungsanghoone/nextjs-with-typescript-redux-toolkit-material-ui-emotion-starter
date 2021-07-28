import * as React from 'react';
import { NextPage } from 'next';
import wrapper from '../store';
import { changePage } from '../store/page/pageSlice';
import { Page } from '../constants';
import { usePage } from '../hooks/usePage';

export const getServerSideProps = wrapper.getServerSideProps(store => () => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things');
  store.dispatch(
    changePage({
      relativeUrl: Page.SETTINGS.relativeUrl,
    }),
  );
});

const Settings: NextPage = () => {
  const { selectedPage } = usePage();
  console.log('page', selectedPage);
  return <div>Settings Page!</div>;
};

export default Settings;
