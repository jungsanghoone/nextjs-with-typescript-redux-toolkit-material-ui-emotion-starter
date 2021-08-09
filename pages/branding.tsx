/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import wrapper from '../store';
import { changePage } from '../store/page/pageSlice';
import { Page } from '../constants';
import { usePage } from '../hooks/usePage';
import { useDrawer } from '../hooks/useDrawer';
import CustomMainBox from '../components/cmn/CustomMainBox';

export const getStaticProps = wrapper.getStaticProps(store => ({ locale }) => {
  store.dispatch(
    changePage({
      relativeUrl: Page.BRANDING.relativeUrl,
    }),
  );
  return {
    props: {
      messages: {
        ...require(`../messages/common/${locale}.json`),
      },
    },
  };
});
const Branding: NextPage = () => {
  const { selectedPage } = usePage();
  const t = useTranslations();
  const { open } = useDrawer();
  console.log('page', selectedPage);
  return <CustomMainBox open={open}>{t('BRANDING')} Page!</CustomMainBox>;
};

export default Branding;
