/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from '../../constants';
import { RootState } from '../rootReducer';

export type PagePayload = {
  relativeUrl: string;
};

export type PageState = {
  relativeUrl: string;
  pageTitle: string;
  pageDescription: string;
  selectIcon: string;
  icon: string;
};

const initialState: PageState = {
  relativeUrl: Page.DOCUMENT.relativeUrl,
  pageTitle: Page.DOCUMENT.pageTitle,
  pageDescription: Page.DOCUMENT.pageDescription,
  selectIcon: Page.DOCUMENT.selectIcon,
  icon: Page.DOCUMENT.icon,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (
      state: PageState,
      action: PayloadAction<PagePayload>,
    ): PageState => {
      const { relativeUrl } = action.payload;
      const selectedPage: Page = Page.of(relativeUrl);
      return {
        ...state,
        relativeUrl: selectedPage.relativeUrl,
        pageTitle: selectedPage.pageTitle,
        pageDescription: selectedPage.pageDescription,
        selectIcon: selectedPage.selectIcon,
        icon: selectedPage.icon,
      };
    },
  },
});

export default pageSlice.reducer;

export const { changePage } = pageSlice.actions;

export const pageSelector = (state: RootState): PageState => state.page;
