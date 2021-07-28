import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from '../../constants';
import { RootState } from '../rootReducer';

/**
 * Payload
 */
export type PagePayload = {
  relativeUrl: string;
};

/**
 * State
 */
export type PageState = {
  relativeUrl: string;
  pageTitle: string;
  pageDescription: string;
  title: string;
  metaDescription: string;
};

const initialState: PageState = {
  relativeUrl: Page.DOCUMENT.relativeUrl,
  pageTitle: Page.DOCUMENT.pageTitle,
  pageDescription: Page.DOCUMENT.pageDescription,
  title: Page.DOCUMENT.title,
  metaDescription: Page.DOCUMENT.metaDescription,
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
        title: selectedPage.title,
        metaDescription: selectedPage.metaDescription,
      };
    },
  },
});

/**
 * Reducer
 */
export default pageSlice.reducer;

/**
 * Action
 */
export const { changePage } = pageSlice.actions;

/**
 * Selector
 * @param state PageStateType
 */
export const pageSelector = (state: RootState): PageState => state.page;
