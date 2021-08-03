import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DocumentMenu } from '../constants';
import {
  changeDocCondition,
  documentsSelector,
} from '../store/documents/documentsSlice';

type DocumentsOperators = {
  selectedCondition: DocumentMenu;
  changeDocCondition: (docSearchCondition: string) => void;
};

export const useDocuments = (): Readonly<DocumentsOperators> => {
  const dispatch = useDispatch();
  const documentsState = useSelector(documentsSelector);
  const documentMenu: DocumentMenu = DocumentMenu.of(
    documentsState.docSearchCondition,
  );

  return {
    selectedCondition: documentMenu,
    changeDocCondition: useCallback(
      (docSearchCondition: string) => {
        dispatch(
          changeDocCondition({
            docSearchCondition: docSearchCondition,
          }),
        );
      },
      [dispatch],
    ),
  };
};
