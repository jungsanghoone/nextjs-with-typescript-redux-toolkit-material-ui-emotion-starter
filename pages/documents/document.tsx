/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import wrapper from '../../store';
import { changePage } from '../../store/page/pageSlice';
import { Page, DocumentMenu } from '../../constants';
import { changeDocCondition } from '../../store/documents/documentsSlice';
import { useDrawer } from '../../hooks/useDrawer';
import CustomMainBox from '../../components/cmn/CustomMainBox';

export const getStaticProps = wrapper.getStaticProps(store => ({ locale }) => {
  console.log('document Page.getServerSideProps');
  store.dispatch(changePage({ relativeUrl: Page.DOCUMENT.relativeUrl }));
  store.dispatch(
    changeDocCondition({
      docSearchCondition: DocumentMenu.ALL.docSearchCondition,
    }),
  );
  return {
    props: {
      messages: {
        ...require(`../../messages/common/${locale}.json`),
        ...require(`../../messages/document/${locale}.json`),
      },
    },
  };
});

const Document: NextPage = () => {
  // const { selectedPage } = usePage();
  // const { selectedCondition } = useDocuments();
  const t = useTranslations();
  const { locale } = useRouter();
  const { open } = useDrawer();
  console.log(`locale`, locale);
  // console.log('page', selectedPage, selectedCondition);
  return <CustomMainBox open={open}>{t('WORKFLOW')} Page! </CustomMainBox>;
};

export default Document;
