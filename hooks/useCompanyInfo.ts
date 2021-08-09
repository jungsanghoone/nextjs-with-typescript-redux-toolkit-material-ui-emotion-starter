/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  companyInfoSelector,
  getCompanyProductInfoAction,
} from '../store/companyInfo/companyInfoSlice';
import { ICompanyInfo } from '../constants/CompanyInfo';

interface useCompanyInfoProps {
  companyInfos: ICompanyInfo;
  getCompanyProductInfo: () => AsyncThunkAction<ICompanyInfo, void, {}>;
}

const useCompanyInfo = (): useCompanyInfoProps => {
  const dispatch = useDispatch();
  const companyInfos = useSelector(companyInfoSelector);

  return {
    companyInfos,
    getCompanyProductInfo: useCallback(
      () => dispatch(getCompanyProductInfoAction()),
      [dispatch],
    ),
  };
};

export default useCompanyInfo;
