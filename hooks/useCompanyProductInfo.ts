import useSWR from 'swr';
import { fetcherHeader } from '../libs/useRequest';

interface CompanyInfo {
  body: {
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
  };
}

interface Props {
  data: CompanyInfo;
  isLoading: boolean;
  isError: boolean;
}

function useCompanyProductInfo(): Props {
  const { data, error } = useSWR(
    [
      'http://localhost:8081/api/v2/company',
      'jSowsoc6+Tu6tB8iHjS57DmnaJ0qkrrJgiCcCRqXEqJQO5edMdAeHlytcSVXpKCpHQNEXmJ2eGT/DqF+OJThbg==',
    ],
    fetcherHeader,
  );
  return { data, isLoading: !error && !data, isError: error };
}

export default useCompanyProductInfo;
