/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import wrapper from '../store';
import { changePage } from '../store/page/pageSlice';
import { Page } from '../constants';
import { usePage } from '../hooks/usePage';
import CustomMainBox from '../components/cmn/CustomMainBox';
import { useDrawer } from '../hooks/useDrawer';

export const getStaticProps = wrapper.getStaticProps(store => ({ locale }) => {
  store.dispatch(
    changePage({
      relativeUrl: Page.SETTINGS.relativeUrl,
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

const Settings: NextPage = () => {
  const t = useTranslations();
  const { selectedPage } = usePage();
  const { open } = useDrawer();
  console.log('page', selectedPage);
  return <CustomMainBox open={open}>{t('SETTINGS')} Page!</CustomMainBox>;
};

export default Settings;
