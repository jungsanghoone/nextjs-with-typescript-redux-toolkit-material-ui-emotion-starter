import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { makeHeader } from '../../libs/makeComm';
import { RootState } from '../rootReducer';

interface CompanyInfo {
  country_code: string;
  workflow_capacity: string | number;
  workflow_usage: number;
  expiry_date: string;
  create_email: string;
  name: string;
  contract_company_name: string;
  sign_up_type: string;
  grade_code: string;
  create_date: string;
}

export const getCompanyProductInfoAction = createAsyncThunk(
  'companyInfo/getCompanyProductInfo',
  async () => {
    let result = initialState;
    const url = 'http://localhost:8081/api/v2/company';
    const response = await axios.get(
      url,
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

const initialState: CompanyInfo = {
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
  (builder: ActionReducerMapBuilder<CompanyInfo>) =>
    builder.addCase(getCompanyProductInfoAction.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    }),
);

export default companyInfoSlice;

export const companyInfoSelector = (state: RootState) => state.companyInfo;
