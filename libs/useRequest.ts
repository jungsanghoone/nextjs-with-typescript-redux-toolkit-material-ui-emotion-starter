/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR, { SWRConfiguration, SWRResponse, useSWRInfinite } from 'swr';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { makeHeader } from './makeComm';

const fetcher = (url: string) => axios.get(url).then(res => res.data);
export const fetcherHeader = async (url, token) => {
  const response = await axios.get(url, makeHeader(token));
  return response.data;
};

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'revalidate' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    'initialData'
  > {
  initialData?: Data;
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  { initialData, ...config }: Config<Data, Error> = {},
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    revalidate,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && JSON.stringify(request),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => axios(request!),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config: request!,
        headers: {},
        data: initialData,
      },
    },
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}

interface Data {
  posts: never[];
  error: any;
  isLoadingMore: boolean | undefined;
  size: number;
  setSize: (
    size: number | ((size: number) => number),
  ) => Promise<any[] | undefined>;
  isReachingEnd: boolean | undefined;
}

interface CompanyInfo {
  header: never[];
  body: never[];
}

export const useCompanyInfo = (path: string) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = path;
  const requestHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'esignon jSowsoc6+Tu6tB8iHjS57DmnaJ0qkrrJgiCcCRqXEqJQO5edMdAeHlytcSVXpKCpHQNEXmJ2eGT/DqF+OJThbg==',
    },
  };

  const { data, error } = useSWR(url, axios.get(url, requestHeader));
  console.log('data', data, error);
  return { data, error };
};
export const usePaginatePosts = (path: string): Data => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = path;
  const PAGE_LIMIT = 5;

  const { data, error, size, setSize } = useSWRInfinite(
    index => `${url}?_page=${index + 1}&_limit=${PAGE_LIMIT}`,
    fetcher,
  );

  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

  return { posts, error, isLoadingMore, size, setSize, isReachingEnd };
};
