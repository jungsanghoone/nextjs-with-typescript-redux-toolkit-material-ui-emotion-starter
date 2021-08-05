/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DocumentMenu } from '../../constants';
import { RootState } from '../rootReducer';

interface DocumentsPayload {
  docSearchCondition: string;
}

interface DocumentsState {
  docSearchCondition: string;
  menuTitle: string;
  menuIcon: string;
}

const initialState: DocumentsState = {
  docSearchCondition: DocumentMenu.ALL.docSearchCondition,
  menuTitle: DocumentMenu.ALL.menuTitle,
  menuIcon: DocumentMenu.ALL.menuIcon,
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    changeDocCondition(state, action: PayloadAction<DocumentsPayload>) {
      const { docSearchCondition } = action.payload;
      const selectedCondition: DocumentMenu =
        DocumentMenu.of(docSearchCondition);
      state.docSearchCondition = selectedCondition.docSearchCondition;
      state.menuTitle = selectedCondition.menuTitle;
      state.menuIcon = selectedCondition.menuIcon;
    },
  },
});

export const { changeDocCondition } = documentsSlice.actions;
export default documentsSlice.reducer;

export const documentsSelector = (state: RootState): DocumentsState =>
  state.documents;
