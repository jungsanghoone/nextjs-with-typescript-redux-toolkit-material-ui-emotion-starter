import useSWR from 'swr';
import { fetcherHeader } from '../libs/useRequest';
import { ICompanyInfo } from '../constants/CompanyInfo';

interface CompanyInfo {
  body: ICompanyInfo;
}

interface Props {
  data: CompanyInfo;
  isLoading: boolean;
  isError: boolean;
}

function useCompanyProductInfo(): Props {
  const url = process.env.NEXT_PUBLIC_URL;
  const { data, error } = useSWR(
    [
      `${url}/api/v2/company`,
      'jSowsoc6+Tu6tB8iHjS57DmnaJ0qkrrJgiCcCRqXEqJQO5edMdAeHlytcSVXpKCpHQNEXmJ2eGT/DqF+OJThbg==',
    ],
    fetcherHeader,
  );
  return { data, isLoading: !error && !data, isError: error };
}

export default useCompanyProductInfo;
