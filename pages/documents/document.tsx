/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import { NextPage } from 'next';
import wrapper from '../../store';
import { changePage } from '../../store/page/pageSlice';
import { Page, DocumentMenu } from '../../constants';
import { changeDocCondition } from '../../store/documents/documentsSlice';
import { useDrawer } from '../../hooks/useDrawer';
import CustomMainBox from '../../components/cmn/CustomMainBox';

export const getStaticProps = wrapper.getStaticProps(store => () => {
  console.log('document Page.getServerSideProps');
  store.dispatch(changePage({ relativeUrl: Page.DOCUMENT.relativeUrl }));
  store.dispatch(
    changeDocCondition({
      docSearchCondition: DocumentMenu.ALL.docSearchCondition,
    }),
  );
  return { props: {} };
});

const Document: NextPage = () => {
  // const { selectedPage } = usePage();
  // const { selectedCondition } = useDocuments();
  const { open } = useDrawer();
  // console.log('page', selectedPage, selectedCondition);
  return <CustomMainBox open={open}>Document Page!</CustomMainBox>;
};

export default Document;
