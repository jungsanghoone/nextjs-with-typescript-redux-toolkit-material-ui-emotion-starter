/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import { NextPage } from 'next';
import { changePage } from '../../store/page/pageSlice';
import { Page } from '../../constants';
import { usePage } from '../../hooks/usePage';
import CustomMainBox from '../../components/cmn/CustomMainBox';
import { useDrawer } from '../../hooks/useDrawer';
import wrapper from '../../store';

export const getStaticProps = wrapper.getStaticProps(store => () => {
  store.dispatch(
    changePage({
      relativeUrl: Page.TEMPLATE.relativeUrl,
    }),
  );
  return { props: {} };
});

const Template: NextPage = () => {
  const { selectedPage } = usePage();
  const { open } = useDrawer();
  console.log('page', selectedPage);
  return <CustomMainBox open={open}>Template Page!</CustomMainBox>;
};

export default Template;
