/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { makeHeader } from '../../libs/makeComm';
import { RootState } from '../rootReducer';
import { ICompanyInfo } from '../../constants/CompanyInfo';

const url = process.env.NEXT_PUBLIC_URL;

export const getCompanyProductInfoAction = createAsyncThunk(
  'companyInfo/getCompanyProductInfo',
  async () => {
    let result = initialState;
    const response = await axios.get(
      `${url}/api/v2/company`,
      makeHeader(
        'jSowsoc6+Tu6tB8iHjS57DmnaJ0qkrrJgiCcCRqXEqJQO5edMdAeHlytcSVXpKCpHQNEXmJ2eGT/DqF+OJThbg==',
      ),
    );

    const { header, body } = response.data;
    if (header.result_code === '00') {
      result = body;
    }
    return result;
  },
);

const initialState: ICompanyInfo = {
  country_code: '',
  workflow_capacity: 0,
  workflow_usage: 0,
  expiry_date: '',
  create_email: '',
  name: '',
  contract_company_name: '',
  sign_up_type: '',
  grade_code: '',
  create_date: '',
};

export const companyInfoSlice = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<ICompanyInfo>) =>
    builder.addCase(getCompanyProductInfoAction.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    }),
);

export default companyInfoSlice;

export const companyInfoSelector = (state: RootState) => state.companyInfo;
