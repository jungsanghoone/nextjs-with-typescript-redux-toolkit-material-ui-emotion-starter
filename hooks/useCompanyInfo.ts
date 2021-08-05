import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  companyInfoSelector,
  getCompanyProductInfoAction,
} from '../store/companyInfo/companyInfoSlice';

export const useCompanyInfo = () => {
  const dispatch = useDispatch();
  const companyInfos = useSelector(companyInfoSelector);

  return {
    companyInfos: companyInfos,
    getCompanyProductInfo: useCallback(
      () => dispatch(getCompanyProductInfoAction()),
      [dispatch],
    ),
  };
};
