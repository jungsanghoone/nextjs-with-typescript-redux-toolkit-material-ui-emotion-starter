import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../constants';
import { changePage, pageSelector } from '../store/page/pageSlice';

type PageOperators = {
  selectedPage: Page;
  changePage: (relativeUrl: string) => void;
};

export const usePage = (): Readonly<PageOperators> => {
  const dispatch = useDispatch();
  const pageState = useSelector(pageSelector);
  const page: Page = Page.of(pageState.relativeUrl);

  return {
    selectedPage: page,
    changePage: useCallback(
      (relativeUrl: string) => {
        dispatch(
          changePage({
            relativeUrl: relativeUrl,
          }),
        );
      },
      [dispatch],
    ),
  };
};
